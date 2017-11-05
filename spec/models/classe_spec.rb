require 'rails_helper'

RSpec.describe Classe, type: :model do
  it 'has a valid factory' do
    expect(build(:classe)).to be_valid
  end

  # Lazily loaded to ensure it's only used when it's needed
  let(:classe) { build(:classe) }

  describe "ActiveModel validations" do
    # Basic validations
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:description) }
    it { should validate_presence_of(:experience) }

    # Inclusion/acceptance of values
    it { should allow_value([true, false]).for(:certified) }
    it { should_not allow_value(nil).for(:certified) }

    it { should allow_value([true, false]).for(:private) }
    it { should_not allow_value(nil).for(:private) }
  end

  describe "ActiveRecord associations" do
  end

  describe "public instance methods" do
    context "responds to its methods" do
      it { expect(classe).to respond_to(:tag_names=) }
      it { expect(classe).to respond_to(:tag_names) }
    end

    context "executes methods correctly" do
      context "#tag_names accessors" do
        let(:classe_with_tags) { build(:classe, tag_names: 'tag1 tag2 TAG3') }

        it "creates tags with tag_names=" do
          expect(classe_with_tags.tags.find { |tag| tag[:name] == 'tag1' }).to_not be_nil
          expect(classe_with_tags.tags.find { |tag| tag[:name] == 'tag2' }).to_not be_nil
          # Check that this tag is lower case
          expect(classe_with_tags.tags.find { |tag| tag[:name] == 'tag3' }).to_not be_nil
          expect(classe_with_tags.tags.length).to eq(3)
        end

        it "get tags in a string with tag_name" do
          expect(classe_with_tags.tag_names).to eq('tag1 tag2 tag3')
        end
      end
    end
  end

  describe "public class methods" do
    context "responds to its methods" do
      it { expect(Classe).to respond_to(:geo_search) }
    end

    context "executes methods correctly" do
      context "self.geo_search" do
        city_center = { latitude: 49.2834121, longitude: -123.1175606 }

        context "should find by location" do
          it "if is in radius" do
            in_radius = create(:classe, with_location: false)
            create(:location, :howe_vancouver, classe: in_radius)
            out_radius = create(:classe, with_location: false)
            create(:location, :richmond, classe: out_radius)

            result = Classe.geo_search(city_center.merge(radius: 1000))
            expect(result.count).to eq(1)
            expect(result).to include(in_radius)
            expect(result).to_not include(out_radius)
          end

          it "if at least one address is in radius" do
            in_radius = create(:classe, with_location: false)
            create(:location, :howe_vancouver, classe: in_radius)
            create(:location, :richmond, classe: in_radius)

            out_radius = create(:classe, with_location: false)
            create(:location, :richmond, classe: out_radius)
            create(:location, :coquitlam, classe: out_radius)

            result = Classe.geo_search(city_center.merge(radius: 1000))
            expect(result.count).to eq(1)
            expect(result).to include(in_radius)
            expect(result).to_not include(out_radius)
          end
        end

        context "should find by textsearch" do
          it "in title" do
            with_keyword = create(:classe, title: 'pancake class')
            without_keyword = create(:classe)

            result = Classe.geo_search(city_center.merge(radius: 1000,
                                                         searchStr: 'pancake'))
            expect(result.count).to eq(1)
            expect(result).to include(with_keyword)
            expect(result).to_not include(without_keyword)
          end

          it "in description" do
            with_keyword = create(:classe, description: 'learn how to make a pancake')
            without_keyword = create(:classe)

            result = Classe.geo_search(city_center.merge(radius: 1000,
                                                         searchStr: 'pancake'))
            expect(result.count).to eq(1)
            expect(result).to include(with_keyword)
            expect(result).to_not include(without_keyword)
          end

          it "with english shimming for verbs" do
            with_keyword = create(:classe, description: 'learn how to climb')
            without_keyword = create(:classe)

            result = Classe.geo_search(city_center.merge(radius: 1000,
                                                         searchStr: 'climbing'))
            expect(result.count).to eq(1)
            expect(result).to include(with_keyword)
            expect(result).to_not include(without_keyword)
          end

          it "with english shimming for plurals" do
            with_keyword = create(:classe, description: 'learn how to make a pancake')
            without_keyword = create(:classe)

            result = Classe.geo_search(city_center.merge(radius: 1000,
                                                         searchStr: 'pancakes'))
            expect(result.count).to eq(1)
            expect(result).to include(with_keyword)
            expect(result).to_not include(without_keyword)
          end

          it "with case invensitivity" do
            with_keyword = create(:classe, description: 'learn how to make a PANcake')
            without_keyword = create(:classe)

            result = Classe.geo_search(city_center.merge(radius: 1000,
                                                         searchStr: 'panCAKE'))
            expect(result.count).to eq(1)
            expect(result).to include(with_keyword)
            expect(result).to_not include(without_keyword)
          end

          it "with multiple non-attached words" do
            with_keyword = create(:classe, description: 'learn how to make a pancake')
            without_keyword = create(:classe)

            result = Classe.geo_search(city_center.merge(radius: 1000,
                                                         searchStr: 'learning pancakes'))
            expect(result.count).to eq(1)
            expect(result).to include(with_keyword)
            expect(result).to_not include(without_keyword)
          end

          it "with multiple words in different fields" do
            with_keyword = create(:classe, title: 'king of cooking',
                                           description: 'learn how to make a pancake')
            without_keyword = create(:classe)

            result = Classe.geo_search(city_center.merge(radius: 1000,
                                                         searchStr: 'king learning pancakes'))
            expect(result.count).to eq(1)
            expect(result).to include(with_keyword)
            expect(result).to_not include(without_keyword)
          end

          it "ignore accents" do
            with_keyword = create(:classe, description: 'learn how to smash a piñata')
            without_keyword = create(:classe)

            result = Classe.geo_search(city_center.merge(radius: 1000,
                                                         searchStr: 'pinata'))
            expect(result.count).to eq(1)
            expect(result).to include(with_keyword)
            expect(result).to_not include(without_keyword)
          end

          it "ignore stopwords" do
            with_keyword = create(:classe, description: 'learning piñata smash')
            without_keyword = create(:classe)

            result = Classe.geo_search(city_center.merge(radius: 1000,
                                                         searchStr: 'learn to smash'))
            expect(result.count).to eq(1)
            expect(result).to include(with_keyword)
            expect(result).to_not include(without_keyword)
          end
        end

        context "should find by certification" do
          it "if certified" do
            certified = create(:classe, certified: true)
            not_certified = create(:classe, certified: false)

            result = Classe.geo_search(city_center.merge(radius: 1000,
                                                         certified: true))
            expect(result.count).to eq(1)
            expect(result).to include(certified)
            expect(result).to_not include(not_certified)
          end

          it "if not certified" do
            certified = create(:classe, certified: true)
            not_certified = create(:classe, certified: false)

            result = Classe.geo_search(city_center.merge(radius: 1000,
                                                         certified: false))
            expect(result.count).to eq(1)
            expect(result).to include(not_certified)
            expect(result).to_not include(certified)
          end
        end

        context "should find by private" do
          it "if private" do
            private = create(:classe, private: true)
            not_private = create(:classe, private: false)

            result = Classe.geo_search(city_center.merge(radius: 1000,
                                                         private: true))
            expect(result.count).to eq(1)
            expect(result).to include(private)
            expect(result).to_not include(not_private)
          end

          it "if not private" do
            private = create(:classe, private: true)
            not_private = create(:classe, private: false)

            result = Classe.geo_search(city_center.merge(radius: 1000,
                                                         private: false))
            expect(result.count).to eq(1)
            expect(result).to include(not_private)
            expect(result).to_not include(private)
          end
        end

        context "should find by experience" do
          it "if has experience" do
            in_experience = create(:classe, experience: :exp_3)
            out_experience = create(:classe, experience: :exp_10)

            result = Classe.geo_search(city_center.merge(radius: 1000,
                                                         experiences: [:exp_2,
                                                                       :exp_3,
                                                                       :exp_4]))
            expect(result.count).to eq(1)
            expect(result).to include(in_experience)
            expect(result).to_not include(out_experience)
          end
        end
      end
    end
  end
end
