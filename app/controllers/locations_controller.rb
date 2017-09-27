class LocationsController < ApplicationController
  def search
    search_str = search_str_from_params
    results = SearchLocationService.new.execute(search_str)
    @result = results[0]
    respond_to do |format|
      format.html { render layout: !request.xhr? }
    end
  end

  private

  # rubocop:disable Metrics/AbcSize
  def search_str_from_params
    params[:street_address].strip + ' ' +
      params[:city].strip + ' ' +
      params[:state].strip + ' ' +
      params[:postal_code].strip + ' ' +
      params[:country].strip
  end
  # rubocop:enable Metrics/AbcSize
end
