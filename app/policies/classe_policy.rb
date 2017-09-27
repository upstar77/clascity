class ClassePolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope
    end
  end

  def show?
    true
  end

  def create?
    logged_in?
  end

  def update?
    owner?
  end

  def destroy?
    owner?
  end

  private

  def owner?
    logged_in? && user == record.teacher
  end
end
