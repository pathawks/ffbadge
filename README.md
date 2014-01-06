ffbadge
=======

## This is completely outdated and here for archival purposes only. None of this works anymore.

### License

This code was originally released with a [CC BY-SA 3.0 US][cc3] license.

It can now be uesd with your choice of [CC BY-SA 3.0 US][cc3], [CC BY 4.0][cc4], [MIT][mit], or [GPL 2 or later][gpl].

***

I have updated ye ol&rsquo; FriendFeed widget.

It should now be much easier to implement, and it supports likes, avatars, and custom CSS.  
It is modeled after [Glen Slaven's][] amazing [FriendFeed Comments plugin][] for [WordPress][].  
The DOM structure of my new widget is (should) be the same as Glen's plugin, so any CSS hacks you can find for the WordPress plugin should also work with this.

Oh, and this should also work with [Tumblr][], for those of you who care.

Before editing your template **always make sure you have saved a backup copy in case things go wrong.**  

### On the New Blogger...

On your blog's dashboard, go to the "Layout" tab and click on "Edit Template HTML"  
Click the "Expand Widget Templates" check box  
Right under the `<head>` tag, insert  
{% highlight html %}
<script src='http://www.pathawks.com/ffbadge.js'></script>
{% endhighlight %}  
Search for the line that starts with `<b:skin>` and, underneath, insert the line  
{% highlight css %}
@import url("http://www.pathawks.com/ffbadge.css");
{% endhighlight %}  
Search for the line `<div class='post-footer'>`  
Right under that line, insert  
{% highlight html %}
<script expr:src='"http://pipes.yahoo.com/pathawks/ffbadge?_render=json&amp;_callback=ffbadge&amp;service=blog&amp;who=NICKNAME&amp;link=" + data:post.url'/>
{% endhighlight %}  
of course, replacing  **NICKNAME** with your FriendFeed nickname, all lowercase and with out spaces (mine is "pathawks")  
Click the orange "Save Template" button and you should be all set.

### On the Old Blogger (ftp/template tags/etc.)...

On your blog's dashboard, go to the "Template" tab and click on "Edit Template HTML"  
Right under the `<head>` tag, insert  
{% highlight html %}
<script src='http://www.pathawks.com/ffbadge.js'></script>
{% endhighlight %}  
Search for the line that starts with `<style type="text/css">` and, underneath, insert the line   
{% highlight css %}
@import url("http://www.pathawks.com/ffbadge.css");
{% endhighlight %}  
Search for the line `<$BlogItemControl$>`  
Right under that line, insert  
{% highlight html %}
<script src="http://pipes.yahoo.com/pathawks/ffbadge?_render=json&amp;_callback=ffbadge&amp;service=blog&amp;who=NICKNAME&amp;link=<$BlogItemPermalinkUrl$>"></script>
{% endhighlight %}  
of course, replacing  **NICKNAME** with your FriendFeed nickname, all lowercase and with out spaces (mine is "pathawks")  
Click the orange "Save Template Changes" button and you should be all set.</p><p><h3>In Tumblr...</h3>On your dashboard, click on "Customize"  
Go to the "Theme" tab and select "Use custom HTML"  
Right under the `<head>` tag, insert  
{% highlight html %}
<script src='http://www.pathawks.com/ffbadge.js'></script>
{% endhighlight %}  
Search for the line that starts with `<style type="text/css">` and, underneath, insert the line  
{% highlight css %}
@import url("http://www.pathawks.com/ffbadge.css");
{% endhighlight %}  
Search for the line `{/block:Posts}`  
Above that line, you should see `</div>` Above **that** line, insert  
{% highlight html %}
<script src="http://pipes.yahoo.com/pathawks/ffbadge?_render=json&amp;_callback=ffbadge&amp;service=tumblr&amp;who=NICKNAME&amp;link={PostID}"></script>
{% endhighlight %}  
of course, replacing **NICKNAME** with your FriendFeed nickname, all lowercase and with out spaces (mine is "pathawks")  
Click the orange "Save Template Changes" button and you should be all set.

### FeedBurner FeedFlare

I feel like I'm on a roll!  
If you use FeedBurner, you're probably acquainted with FeedFlare, you know, those cute little buttons at the bottom of each post in your feed.  
To add a FeedFlare to search for your post on FriendFeed...  
On your Feed's dashboard, go to the "Optimize" tab.  
Click on "FeedFlare"  
If FeedFlare is not enabled (you're out of your mind) enable it.  
Scroll down to "Personal FeedFlare" and you should see a box where you can enter or past a Flare Unit URL.  
Enter  
{% highlight text %}
http://www.feedburner.com/fb/variableflareunits/GenericFeedFlare.jspx?text=Discuss%20on%20FriendFeed&link=http://friendfeed.com/search?q=${title}%26service=blog%26who=NICKNAME
{% endhighlight %}  
(If this is your Tumblr feed, you'll want to change "service=blog" to "service=tumblr")  

### In conclusion

If you have any questions about using any of these methods, or if you run into problems, feel free to email me at [pat@pathawks.com][email] or leave a comment here or on FriendFeed. Everybody's blog is setup a little diffrent, so there probably will be a couple issues.

As I mentioned earlier, if you're still using WordPress (Why haven't you upgraded to Blogger?) you'll want to check out [Glen Slaven's][] [FriendFeed Comments plugin][].

Welp, I've got to go give the kittens their medicine.  
G'day.

  [cc3]: http://creativecommons.org/licenses/by-sa/3.0/us/ "Creative Commons Attribution-ShareAlike 3.0 United States"
  [cc4]: http://creativecommons.org/licenses/by/4.0/ "Creative Commons Attribution 4.0 International"
  [mit]: http://opensource.org/licenses/mit-license.php "The MIT License"
  [gpl]: http://opensource.org/licenses/gpl-2.0.php "GNU General Public License, version 2"
  [Glen Slaven's]: http://blog.slaven.net.au/ "Glen Slaven"
  [FriendFeed Comments plugin]: http://wordpress.org/extend/plugins/friendfeed-comments/ "FriendFeed Comments for WordPress"
  [WordPress]: http://www.wordpress.org/
  [Tumblr]: http://www.tumblr.com/
  [email]: mailto:pat@pathawks.com?subject=FriendFeed%20badge "Pat Hawks"
