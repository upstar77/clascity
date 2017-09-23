class ClassesController < ApplicationController
  before_action :set_classe, only: [:show, :edit, :update]

  def index
    @classes = Classe.all
  end

  def show
    @classe = Classe.find(params[:id])
    authorize @classe, :show?
  end

  def new
    @classe = Classe.new
    @classe.locations.build
    authorize @classe, :create?
  end

  def create
    @classe = Classe.new(classe_params)
    @classe.teacher = current_user

    authorize @classe, :create?

    if @classe.save
      flash[:notice] = "The class has been created."
      redirect_to @classe
    else
      flash.now[:alert] = "The class has not been created."
      render "new"
    end
  end

  def edit
    authorize @classe, :edit?
    @classe = Classe.find(params[:id])
  end

  def update
    authorize @classe, :edit?
    if @classe.update(classe_params)
      flash[:notice] = "The class has been updated."
      redirect_to @classe
    else
      flash[:alert] = "The class has not been updated."
      render "edit"
    end
  end

  private

  def classe_params
    # Classe params
    params.require(:classe).permit(
      :title, :description, :tag_names, :experience, :certified,
      :locations_attributes =>
        # TODO Restore
        # [:address, :city, :postal_code, :state, :country_code]
        [:raw_address]
    )
  end

  def set_classe
    @classe = Classe.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    flash[:alert] = "The classe you were looking for could not be found."
    redirect_to root_path
  end
end
