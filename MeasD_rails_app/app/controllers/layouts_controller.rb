class LayoutsController < ApplicationController
  def create
    @user = User.find(params[:user_id])
    @layout = @user.layouts.create(layout_params)
    redirect_to user_path(@user)
  end

  private
    def layout_params
      params.require(:layout).permit(:sandbox)
    end
end
