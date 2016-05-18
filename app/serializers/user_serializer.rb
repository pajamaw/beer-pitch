class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :oauth_token
end
