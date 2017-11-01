class Classe < ApplicationRecord
  include PgSearch
  extend Enumerize

  enumerize :experience, in: [:exp_1, :exp_2, :exp_3, :exp_4, :exp_5, :exp_10]

  validates :title, presence: true
  validates :description, presence: true, length: { minimum: 10 }
  validates :experience, presence: true
  validates :certified, inclusion: { in: [true, false] }

  # User
  belongs_to :teacher, class_name: 'User'

  # Location
  has_many :locations, inverse_of: :classe, dependent: :destroy
  accepts_nested_attributes_for :locations
  acts_as_geolocated through: :locations

  # Full text search
  pg_search_scope :search_by_text, against: [:title, :description],
                                   ignoring: :accents,
                                   using: {
                                     tsearch: {
                                       dictionary: 'english',
                                       # tsvector_column: 'tsv_title_description'
                                     }
                                   }

  # FIXME: Search will be slow until this is restored, however we have to
  # implement unaccent support with tsvector
  # trigger.before(:insert, :update).nowrap do
  #   "tsvector_update_trigger('tsv_title_description', 'pg_catalog.english', title, description);"
  # end

  # rubocop:disable Metrics/AbcSize
  def self.geo_search(params)
    res = within_box(params[:radius], params[:latitude], params[:longitude])
    res = res.where(experience: params[:experiences]) unless params[:experiences].nil?
    res = res.where(certified: params[:certified]) unless params[:certified].nil?
    res = res.search_by_text(params[:searchStr]) if params[:searchStr]
    res.uniq # Should use distinct instead of uniq for performance but conflict with textsearch
  end
  # rubocop:enable Metrics/AbcSize

  # Tags
  has_and_belongs_to_many :tags

  def tag_names=(names)
    @tag_names = names
    self.tags = []
    tags_from_tag_names_str(names).each do |name|
      tags << Tag.find_or_initialize_by(name: name)
    end
  end

  def tag_names
    tags.map(&:name).join(' ')
  end

  private

  def tags_from_tag_names_str(names)
    names.downcase.split.uniq
  end
end
