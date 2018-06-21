class OrganizationsController < ApplicationController

  # API namespaced actions

  def index
    organizations = Organization.all

    render json: organizations, status: :ok
  end

  def show
    organization = Organization.find_by_id(params[:id])

    render json: organization,
      status: :ok,
      include: ['teams.*']
  end

end
