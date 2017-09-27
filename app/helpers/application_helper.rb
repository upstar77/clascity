module ApplicationHelper
  def body_data_page
    [*controller.controller_path.split('/'),
     controller.action_name].compact.join(':')
  end
end
