class Api::ProductsController < ApplicationController
    before_action :set_product, only: [:update, :destroy]

    def index
        render json: Product.all
    end

    def create
        product = Product.new(product_params)
        if product.save
            render json: product
        else
            render json: { errors: product.errors}, status: 422
        end
    end

    def update
        product = Product.find(params[:id])
        product.update(purchased: !product.purchased)
        render json: product
    end

    def destroy
        Product.find(params[:id]).destroy
        render json: { message: 'Item deleted' }
    end

    private
    def product_params
        params.require(:product).permit(:name, :purchased)
    end

    def set_product
        product = Product.find(params[:id])
    end
end
