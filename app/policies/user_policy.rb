class UserPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope
    end
  end

  def show?
    true
  end

  def update?
    owner?
  end

  private

  def owner?
    logged_in? && user == record
  end
end
