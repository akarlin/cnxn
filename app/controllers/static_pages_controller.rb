class StaticPagesController < ApplicationController
  def home
    @page = params.fetch(:id, 'index')
    render :action => @page
  end

  def help
    @page = params.fetch(:id, 'index')
    render :action => @page
  end

  def root
    @page = params.fetch(:id, 'index')
    render :action => @page
  end


end
