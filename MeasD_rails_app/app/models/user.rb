class User < ActiveRecord::Base
  has_many :layouts
  validates :name, presence: true, length: { minimum: 2}
  validates :username, presence: true, length: { minimum: 2}
end
