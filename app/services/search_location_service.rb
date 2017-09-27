# Search a location based on a string by using geocoder
# return geocoder results
class SearchLocationService
  def execute(search_str)
    results = Geocoder.search(search_str)
    format_results results
  end

  private

  def format_results(results)
    return nil unless results

    results.map do |result|
      format_result result
    end
  end

  def format_result(r)
    { address:       r.address,
      city:          r.city,
      postal_code:   r.postal_code,
      state:         r.state,
      state_code:    r.state_code,
      country:       r.country,
      country_code:  r.country_code,
      longitude:     r.longitude,
      latitude:      r.latitude }
  end
end
