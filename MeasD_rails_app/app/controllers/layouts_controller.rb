class LayoutsController < ApplicationController
  def index
    @layouts = Layout.all
  end

  def show
    @layout = Layout.find(params[:id])
  end

  def serve
    p "GOT HERE!!!"
    @layout = Layout.find(params[:id])
    # @user = @layout.user
    send_data(@layout.sandbox, :type => @layout.mime_type, :filename => "#{@layout.name}.png", :disposition => "inline")
  end

  def new
    @user = User.find(params[:user_id])
    @layout = @user.layouts.new
  end

  def create
    p params
    @user = User.find(params[:user_id])
    @layout = @user.layouts.new(layout_params) do |t|
      if params[:layout][:sandbox]
        t.sandbox = params[:layout][:sandbox].read
        t.filename = params[:layout][:sandbox].original_filename
        t.mime_type = params[:layout][:sandbox].content_type
      end
    end
    if @layout.save
      redirect_to user_layout_path(@user, @layout)
      # add a notice that layout saved successfully
    else
      render :action => "new"
    end
  end

  def edit
  end

  def upload
    uploaded_io = params[:person][:picture]
    File.open(Rails.root.join('public', 'uploads', uploaded_io.original_filename), 'wb') do |file|
      file.write(uploaded_io.read)
    end
  end

  def update
  end

  def destroy
  end

  private
    def layout_params
      params.require(:layout).permit(params[:layout][:sandbox], :user_id, :name)
    end
end
