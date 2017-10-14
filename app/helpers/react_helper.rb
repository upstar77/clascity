module ReactHelper
  def react_container(options = {}, props = {})
    tag = options.delete(:tag) || :div
    data = {
      data: { "react-props" => props.to_json }
    }
    content_tag(tag, nil, options.deep_merge(data))
  end
end
