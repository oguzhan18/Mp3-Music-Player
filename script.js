$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
			title:"Rock FM",
			artist:"Fm Api",
			mp3:"https://rockfm.rockfm.com.tr:9450/stream",
			poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/%C3%87art_app_beyaz_%282%29.png/600px-%C3%87art_app_beyaz_%282%29.png"
		},
		{
			title:"Your Face",
			artist:"The Stark Palace",
			mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
			poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/%C3%87art_app_beyaz_%282%29.png/600px-%C3%87art_app_beyaz_%282%29.png"
		},
		{
			title:"Hidden",
			artist:"Miaow",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
			poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
		},
		{
			title:"Big Buck Bunny Trailer",
			artist:"Blender Foundation",
			m4v:"http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
			poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
		},
		{
			title:"Finding Nemo Teaser",
			artist:"Pixar",
			m4v: "http://www.jplayer.org/video/m4v/Finding_Nemo_Teaser.m4v",
			poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
		},
		{
			title:"Cyber Sonnet",
			artist:"The Stark Palace",
			mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
			poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
		},
		{
			title:"Incredibles Teaser",
			artist:"Pixar",
			m4v: "http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v",
			poster: "http://www.jplayer.org/video/poster/Incredibles_Teaser_640x272.png"
		},
		{
			title:"Tempered Song",
			artist:"Miaow",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
			poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
		},
		{
			title:"Lentement",
			artist:"Miaow",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
			poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
		}
	], {
		swfPath: "../dist/jplayer",
		supplied: "webmv, ogv, m4v, oga, mp3",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		audioFullScreen: true
	});

	$("#jplayer_inspector_1").jPlayerInspector({jPlayer:$("#jquery_jplayer_1")});
});