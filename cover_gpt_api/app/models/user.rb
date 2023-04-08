class User < ApplicationRecord
    before_save { self.email = email.downcase }

    has_secure_password
    
    validates_presence_of :email
    validates_uniqueness_of :email

    has_many :cover_letters
end
