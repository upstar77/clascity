module UsersHelper
  def confidential_data(user, &block)
    block.call if current_user && current_user == user
  end
end
