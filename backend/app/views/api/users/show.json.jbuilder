json.user do
  json.extract! @user, :id, :email, :username, :watchlist, :created_at, :updated_at
end