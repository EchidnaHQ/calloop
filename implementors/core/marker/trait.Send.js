(function() {var implementors = {};
implementors["calloop"] = [{"text":"impl Send for Mode","synthetic":true,"types":[]},{"text":"impl Send for Interest","synthetic":true,"types":[]},{"text":"impl Send for Readiness","synthetic":true,"types":[]},{"text":"impl Send for Token","synthetic":true,"types":[]},{"text":"impl Send for Poll","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Sender&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for SyncSender&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Send for Executor&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Send for Scheduler&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for Generic&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Fd","synthetic":true,"types":[]},{"text":"impl Send for PingSource","synthetic":true,"types":[]},{"text":"impl Send for Ping","synthetic":true,"types":[]},{"text":"impl Send for Event","synthetic":true,"types":[]},{"text":"impl Send for Signals","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Timer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for TimerHandle&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Timeout","synthetic":true,"types":[]},{"text":"impl&lt;'l, F&gt; !Send for Async&lt;'l, F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'s, 'l, F&gt; !Send for Readable&lt;'s, 'l, F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'s, 'l, F&gt; !Send for Writable&lt;'s, 'l, F&gt;","synthetic":true,"types":[]},{"text":"impl Send for RegistrationToken","synthetic":true,"types":[]},{"text":"impl&lt;'l, Data&gt; !Send for LoopHandle&lt;'l, Data&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for InsertError&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'l, Data&gt; !Send for EventLoop&lt;'l, Data&gt;","synthetic":true,"types":[]},{"text":"impl Send for LoopSignal","synthetic":true,"types":[]},{"text":"impl&lt;S, F&gt; !Send for Dispatcher&lt;S, F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'i&gt; !Send for Idle&lt;'i&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T:&nbsp;Send&gt; Send for Channel&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()