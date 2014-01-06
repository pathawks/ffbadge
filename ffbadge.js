function ffbadge(json) {
if(json.value.items[0].like || json.value.items[0].comment) {
document.write('<div id="friendfeedcomments_' + json.value.items[0].id + '" class="friendfeedcomments"><div id="friendfeedcommentslink_' + json.value.items[0].id + '" class="friendfeedcommentslink"><img src="http://friendfeed.com/static/images/icons/internal.png" alt="" class="friendfeedicon">On FriendFeed, this post was ')
if (json.value.items[0].like) {document.write('liked by ');if (json.value.items[0].like.length) { document.write(json.value.items[0].like.length + ' people ') } else { document.write('1 person ') }}
if(json.value.items[0].like && json.value.items[0].comment) document.write('and ')
if(json.value.items[0].comment) {document.write('commented on ')
if (json.value.items[0].comment.length) { document.write(json.value.items[0].comment.length + ' times') } else { document.write('1 time') }
}
document.write(' <a href="javascript:ffbadgechangestate(\'show\',\''+ json.value.items[0].id +'\')" class="togglefriendfeedcommentslink" id="ff_togglecommentslink_' + json.value.items[0].id + '">Show</a></div><div id="friendfeeddiscussions_' + json.value.items[0].id + '" class="friendfeeddiscussions" style="display:none;"><div class="friendfeedpermalink"><a href="http://www.friendfeed.com/e/' + json.value.items[0].id + '">View this post on FriendFeed</a></div>')
if (json.value.items[0].like) {
document.write('<div id="friendfeedlikeslist_' + json.value.items[0].id + '" class="friendfeedlikeslist">Liked by <ul>')
if (json.value.items[0].like.length) {
for (i=0;i<json.value.items[0].like.length;i++) {
document.write('<li><a href="' + json.value.items[0].like[i].user.profileUrl + '">' + json.value.items[0].like[i].user.name + '</a>')
if ((i+1) < json.value.items[0].like.length) {document.write(', ')}
document.write('</li>')
} 
} else {
document.write('<li><a href="' + json.value.items[0].like.user.profileUrl + '">' + json.value.items[0].like.user.name + '</a>')
}
document.write('</ul></div>')
}
if (json.value.items[0].comment) {
document.write('<div id="friendfeedcommentslist_' + json.value.items[0].id + '" class="friendfeedcommentslist"><ul>')
if (json.value.items[0].comment.length) {
for (i=0;i<json.value.items[0].comment.length;i++) {
document.write('<li class="friendfeedcomment"><a href="' + json.value.items[0].comment[i].user.profileUrl + '" class="profileImage"><img src="' + json.value.items[0].comment[i].user.profileUrl + '/picture?size=medium" alt=""></a><div class="friendfeedmeta"><em style="display:none;">' + json.value.items[0].comment[i].date + '</em> <cite><a href="' + json.value.items[0].comment[i].user.profileUrl + '">' + json.value.items[0].comment[i].user.name + '</a></cite></div><div class="friendfeedcommenttext">' + json.value.items[0].comment[i].body + '</div><div class="clearer"></div></li>')
}
} else {
document.write('<li class="friendfeedcomment"><a href="' + json.value.items[0].comment.user.profileUrl + '" class="profileImage"><img src="' + json.value.items[0].comment.user.profileUrl + '/picture?size=medium" alt=""></a><div class="friendfeedmeta"><em style="display:none;">' + json.value.items[0].comment.date + '</em> <cite><a href="' + json.value.items[0].comment.user.profileUrl + '">' + json.value.items[0].comment.user.name + '</a></cite></div><div class="friendfeedcommenttext">' + json.value.items[0].comment.body + '</div><div class="clearer"></div></li>')
}
document.write('</ul></div>')
}
document.write('</div>')
document.write('</div>')
}
}

function ffbadgechangestate(action,id) {
if (action == 'show') {
blur();
document.getElementById('friendfeeddiscussions_'+id).style.display = "block";
document.getElementById('ff_togglecommentslink_'+id).innerHTML = "Hide";
document.getElementById('ff_togglecommentslink_'+id).href = "javascript:ffbadgechangestate('hide','"+id+"')";
}
if (action == 'hide') {
blur();
document.getElementById('friendfeeddiscussions_'+id).style.display = "none";
document.getElementById('ff_togglecommentslink_'+id).innerHTML = "Show";
document.getElementById('ff_togglecommentslink_'+id).href = "javascript:ffbadgechangestate('show','"+id+"')";
}
}
