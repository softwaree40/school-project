class ToySerializer < ActiveModel::Serializer
  has_many :reviews 
  attributes :id,:name, :description, :url
end
