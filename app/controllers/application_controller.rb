class ApplicationController < ActionController::Base
  include Pundit
  rescue_from Pundit::NotAuthorizedError, with: :not_authorized

  protect_from_forgery with: :exception

  before_action :configure_devise_sanitizer, if: :devise_controller?

  protected

  def devise_permitted_params
    [:first_name, :last_name, :phone, :birthday, :country_code, :city,
     :avatar, :avatar_cache, :remove_avatar]
  end

  def configure_devise_sanitizer
    devise_parameter_sanitizer.permit(:sign_up, keys: devise_permitted_params)
    devise_parameter_sanitizer.permit(:account_update, keys: devise_permitted_params)
  end

  private

  def not_authorized
    redirect_to root_path, alert: "You aren't allowed to do that."
  end
end
