class UsersController < ApplicationController

  def dashboard; end


  # API namespaced actions

  def index
    users = User.all

    render json: users, status: :ok
  end

  def show
    user = User.find_by_id(params[:id])

    if user.is_public
      render json: user,
        status: :ok,
        include: ['teams.*', 'sports']
    else
      render json: nil, status: :forbidden
    end
  end

end
