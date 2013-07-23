---
title: Moving from WordPress to Jekyll
author: rlburns
layout: post
permalink: /2013/05/moving-into-jekyll/
wpsd_autopost:
  - 1
categories:
  - Non-academic
  - Technology
---

A couple weeks ago UW shut down my web hosting because I am on research leave. They shut it down despite the fact that your website serves as a public "face" for people you've only contacted through email, so it's *especially* crucial during research leave. I was able to have UW restore my file system long enough to grab a backup, and I migrated the page over to a Jekyll page on GitHub.

I haven't even made half the transition yet, but I'm liking it a lot more than my WordPress page. It took a lot longer to set up, but that was because 1) it works really well with a number of distributed plugins, each one I had been missing (see examples below), and 2) WordPress uses a character set that didn't convert easily into markdown.

Despite the claims that everything is online "these days", I often find myself without a solid internet connection - in an airplane, a motel or someone's home, driving in the middle of nowhere... So it always bothers me when technologies are available *only online*. That's one of the cool things about this GitHub+Jekyll setup: I can develop while offline, test it on a local server, and then upload them when I'm connected. This partly goes along with the lack of the admin interface that [some people](http://developmentseed.org/blog/2012/07/27/build-cms-free-websites/) decried in Wordpress. Without the need for an admin interface I can just develop everything locally on my hard drive if I need to.

It's super, super simple to edit in comparison with WordPress's endless layers of PHP. Trying to edit the appearance of themes in WP was always a pain in the neck for me, partly a result of my limited knowledge of it. Oh, and try adding a line of JavaScript! Ugh! With GitHub and Jekyll, it feels more open and free (libre) because I can copy, paste, and edit code from others' GitHub pages.

So, for the platform, here's my current setup and immediate plans. I set it up on Jekyll (thanks to [these](http://weedygarden.net/2012/12/hello-jekyll/) [super](http://jekyllbootstrap.com/) helpful links). This was quick and easy partly because Ben Balter wrote [an excellent script](https://github.com/benbalter/wordpress-to-jekyll-exporter) to convert WordPress sites to Jekyll-compatible markup. I decided on the Left Jekyll theme, which will look nice after some customization, I think. I'm using [Disqus](http://disqus.com/burnsr77/) to manage my comments, and messing around some with [IntenseDebate](http://intensedebate.com/profiles/burnsr77). I'm also trying to figure out if, and how, [Prose.io](http://prose.io/) can help me with text editing so I can move out of my super good [TextPad](http://textpad.com/) but into something a little more streamlined.

In purely pragmatic terms, being able to host the site for free on a platform I don't have to worry about is nice, too. To be frank, I think it was pretty crappy how UW shut down the site so abruptly without a concern for my use of the site. Don't have to worry about that with GitHub: it's institution-agnostic.