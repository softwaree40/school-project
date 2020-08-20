class ReviewSerializer < ActiveModel::Serializer
  belongs_to :toy
  attributes :id, :content, :toy_id
end
