var button = document.getElementById("load");
var userFeed = new Instafeed({
	get: 'user',
	userId: '187235333',
	accessToken: '187235333.1677ed0.bc80d066845442baba154f0f8398e192',
	resolution: 'standard_resolution',
	useHttp: "true",
	template: '<div id="{{id}}" class="img-main-container"><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i> {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><div class="instagram_img" style="background-image: url({{image}});"></div></div></a></div>',
	//template: '<a href="{{link}}" target="_blank" id="{{id}}"><div class="instagram_img_holder" style="background-image: url({{image}});"> </div></a>',
	sortBy: 'most-recent',
	limit: 12,
	target: "instafeed-gallery-feed",
	after: function() {
		// disable button if no more results to load
		if (!this.hasNext()) {
			btnInstafeedLoad.setAttribute('disabled', 'disabled');
		}
	}
});
userFeed.run();

button.addEventListener("click", function() {
	userFeed.next()
});