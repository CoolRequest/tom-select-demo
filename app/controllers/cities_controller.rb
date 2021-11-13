class CitiesController < ApplicationController
  def index
  end

  def autocomplete
    list = City.order(:name)
               .where("name like :q", q: "%#{params[:q]}%")

    render json: list.map { |u| { text: u.name, value: u.id } }
  end

  def filter
    list = City.order(:name)
               .where(state: params[:filter])

    render json: list.map { |u| { text: u.name, value: u.id } }
  end

end

