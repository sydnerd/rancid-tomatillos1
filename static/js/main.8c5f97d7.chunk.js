(this["webpackJsonprancid-tomatillos1"]=this["webpackJsonprancid-tomatillos1"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(14),s=n.n(a),r=(n(25),n(18)),o=n(15),l=n(16),m=n(20),u=n(19),d=(n(26),n(7)),j=(n(27),n(1)),h=function(e){var t=e.image,n=e.findMovie,i=e.id;return Object(j.jsx)(d.b,{to:"/".concat(i),children:Object(j.jsx)("div",{className:"poster",id:i,onClick:function(){return n(i)},children:Object(j.jsx)("img",{alt:"movie-poster",className:"movie-poster",src:t})})})},v=(n(37),function(e){var t=e.findMovie,n=e.movies.map((function(e){return Object(j.jsx)(h,{title:e.title,rating:e.average_rating,image:e.poster_path,id:e.id,findMovie:t},e.id)}));return Object(j.jsx)("div",{className:"movies-container",children:n})}),b=(n(38),function(e){var t=e.movieInfo,n=!!t.budget&&"Budget: $".concat(t.budget),i=!!t.revenue&&"Revenue: $".concat(t.revenue),c=!!t.genres&&"Genre(s): ".concat(t.genres);return Object(j.jsxs)("section",{className:"movie-detail-section",children:[Object(j.jsx)("div",{className:"movie-detail-backdrop",children:Object(j.jsx)("img",{className:"backdrop",src:t.backdrop_path})}),Object(j.jsxs)("div",{className:"movie-detail-list",children:[Object(j.jsx)("h2",{className:"title",children:t.title}),Object(j.jsx)("h3",{className:"tagline",children:t.tagline}),Object(j.jsx)("p",{className:"overview",children:t.overview}),Object(j.jsx)("p",{className:"genre",children:c}),Object(j.jsxs)("p",{className:"average-rating",children:["Average Rating: ",t.average_rating]}),Object(j.jsx)("p",{className:"budget",children:n}),Object(j.jsx)("p",{className:"revenue",children:i}),Object(j.jsxs)("p",{className:"runtime",children:["Runtime: ",t.runtime," min"]}),Object(j.jsxs)("p",{className:"release-date",children:["Release Date: ",t.release_date]})]})]})}),f=(n(39),n.p+"static/media/home.4b8cc3a7.png"),g=function(e){e.findMovie;var t=e.renderMainPage;return Object(j.jsxs)("header",{children:[Object(j.jsx)(d.b,{to:"/",children:Object(j.jsx)("button",{alt:"home-button","aria-label":"Home Button",className:"home-button",onClick:t,children:Object(j.jsx)("img",{alt:"home button",className:"home-image",src:f})})}),Object(j.jsx)("h1",{className:"site-title",children:"Rancid Tomatillos"})]})},p=n(2),O=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).getMovies=function(t){e.setState({movies:[].concat(Object(r.a)(e.state.movies),[t])})},e.renderMainPage=function(){e.setState({movieID:0})},e.updateMovieID=function(t){(function(e){return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/".concat(e)).then((function(e){return e.json()})).then((function(e){return function(e){return e.movie.genres=e.movie.genres.join(", "),e.movie.average_rating=e.movie.average_rating.toFixed(1),e.movie.release_date=e.movie.release_date.split("-").shift(),e}(e)}))})(t).then((function(t){return e.setState({movieID:t.movie})})).catch((function(){return e.setState({error:"We're experiencing server technical difficulties, please check back again later!"})}))},e.state={movies:[],movieID:0,error:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies").then((function(e){return e.json()})).then((function(t){e.setState({movies:t.movies})})).catch((function(){return e.setState({error:"We're experiencing server technical difficulties, please check back again later!"})}))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("main",{className:"App",children:[Object(j.jsx)(g,{className:"App-header",findMovie:this.findMovie}),!this.state.movies.length&&!this.state.error.length&&Object(j.jsx)("h2",{children:"Loading movies ..."}),!!this.state.error.length&&Object(j.jsx)("h2",{children:this.state.error}),Object(j.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(j.jsx)(v,{findMovie:e.updateMovieID,movies:e.state.movies})}}),Object(j.jsx)(p.b,{path:"/:id",render:function(){return Object(j.jsx)(b,{movieInfo:e.state.movieID})}}),Object(j.jsx)(p.a,{to:"/"})]})}}]),n}(i.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(d.a,{children:Object(j.jsx)(O,{})})}),document.getElementById("root")),x()}},[[40,1,2]]]);
//# sourceMappingURL=main.8c5f97d7.chunk.js.map