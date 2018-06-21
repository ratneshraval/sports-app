class Organizations::ParticipationsController < ApplicationController

  def by_team
    org = Organization.find_by_id(params[:organization_id])
    participation = org.participation_by_team

    render json: participation,
      adapter: false,
      status: :ok
  end
end
