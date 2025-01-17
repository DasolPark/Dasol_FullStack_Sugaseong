import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    avatarUrl: String,
    githubId: Number,
    facebookId: Number,
    googleId: Number,
    naverId: Number,
    kakaoId: Number,
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ],
    boards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board'
      }
    ]
  },
  {
    timestamps: true
  }
);

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const model = mongoose.model('User', UserSchema);

export default model;
