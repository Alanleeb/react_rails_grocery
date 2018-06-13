class Api::ApiController < ApplicationController
    def render_errors(model)
      render json: { errors: model.errors }, status: 422
    end
  end