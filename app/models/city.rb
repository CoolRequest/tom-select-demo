class City < ApplicationRecord

  def self.to_select
    City.order(:name).pluck(:name, :id)
  end

  def self.states_to_select
    City.pluck(:state).uniq.sort
  end

end
