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
    is_owner?
  end

  private

  def is_owner?
    is_logged_in? && user == record
  end
end
