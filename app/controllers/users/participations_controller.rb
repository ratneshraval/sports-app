class Users::ParticipationsController < ApplicationController

  def by_sport
    user = User.find_by_id(params[:user_id])
    if user.is_public
      participation = user.participation_by_sport

      render json: participation,
        adapter: false,
        status: :ok
    else
      render json: nil, status: :forbidden
    end

  end

  def by_team
    user = User.find_by_id(params[:user_id])
    if user.is_public
      participation = user.participation_by_team

      render json: participation,
        adapter: false,
        status: :ok
    else
      render json: nil, status: :forbidden
    end
  end

end
