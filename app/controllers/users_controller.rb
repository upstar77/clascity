class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update]

  def show
    authorize @user, :show?
  end

  def edit
    authorize @user, :update?
  end

  def update
    authorize @user, :update?

    if @user.update(user_params)
      flash[:notice] = "User has been updated."
      redirect_to @user
    else
      flash.now[:alert] = "User has not been updated."
      render "edit"
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :phone, :birthday, :country_code, :city, :avatar, :avatar_cache, :remove_avatar, :remote_avatar_url)
  end
end
