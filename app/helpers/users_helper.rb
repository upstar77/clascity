module UsersHelper
  def confidential_data(user)
    yield if current_user && current_user == user
  end
end
