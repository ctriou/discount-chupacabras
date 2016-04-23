'use strict';

/**
 * @ngdoc function
 * @name scrumSiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the scrumSiteApp
 */
angular.module('scrumSiteApp')
  .controller('ShopCtrl', function ($timeout, $scope) {

  		this.chupacabras = [
  			{url: "images/chupacabras/1.png", name: "Pariatur", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute"},
  			{url: "images/chupacabras/2.png", name: "Accusamus", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam"},
  			{url: "images/chupacabras/3.png", name: "Untrammelled", description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues"},
  			{url: "images/chupacabras/4.png", name: "Megatron", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volupta"}
  		];

  		this.getActiveChupacabra = function(){
  			return this.chupacabras[$("li.active.lslide").index() -1];
  		};

  		$timeout(function (){
  			$(document).ready(function() {
			    $("#lightSlider").lightSlider({
				    gallery: true,
				    item: 1,
				    loop: true,
				    slideMargin: 0,
				    thumbItem: 4,
				    adaptiveHeight: true,
					vertical:false,
					verticalHeight:300,
					vThumbWidth:100,
					onAfterSlide: function(){
						$timeout(function(){
							$scope.$apply();
						},100)
					}
			}); 
		});
  	});
  });
