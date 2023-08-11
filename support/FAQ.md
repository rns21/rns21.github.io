# RDK FAQ

## Access and Authentication

**<u>*How to set Global Git Username and Password?*</u>**

To set git username and password, use the following commands.

$git config --global <a href="http://user.name/" class="external-link"
rel="nofollow">user.name</a> "Your Name"  
$git config --global user.email
"youremail@<a href="http://yourdomain.com/" class="external-link"
rel="nofollow">yourdomain.com</a>"

------------------------------------------------------------------------

  

**<u>*How to solve password prompt errors during repo initiation?*</u>**

<u><span style="color: rgb(0,0,0);">Issue:</span></u>

<span style="color: rgb(0,0,0);">While trying to do a repository
initialization, the user will be prompted for a password.</span>

  

<span style="color: rgb(0,0,0);"><u>Example console log:</u></span>

<span style="color: rgb(0,0,0);">Password for
'<a href="https://code.rdkcentral.com/" class="external-link"
rel="nofollow">https://code.rdkcentral.com</a>': remote: Unauthorized
fatal: Authentication failed for
'https://&lt;username&gt;@<a href="http://code.rdkcentral.com/r/manifests/" class="external-link"
rel="nofollow">code.rdkcentral.com/r/manifests/</a>'</span>

<span style="color: rgb(0,0,0);"><u>Possible reasons and
solutions:</u></span>

-   Not having a valid RDK Credential

    -   Obtain valid RDK credentials :
        <span style="color: rgb(0,0,0);">Users must have a valid RDK
        Central Credentials. To register use the link below</span>

        -   <span style="color: rgb(0,0,0);">*RDK Central Registration
            Link - <a href="https://wiki.rdkcentral.com/signup.action"
            rel="nofollow">https://wiki.rdkcentral.com/signup.action</a>*</span>

-   User registration without valid company email address

    -   <span style="color: rgb(0,0,0);">Users must belong to a licensed
        company to be able to clone and checkout the manifest. You must
        register with valid company email address to gain access to
        manifest if your company is listed as a licensee. To verify if
        your company is licensed, please check in the following wiki
        page -
         </span>[Licensees](https://wiki.rdkcentral.com/display/RDK/Licensees)<span style="color: rgb(0,0,0);">. </span>

-   <span style="color: rgb(176,0,0);">A</span><span style="color: rgb(0,0,0);">ccount
    is inactive/disabled - </span>
    -   <span style="color: rgb(0,0,0);">Account may have been
        deactivated/disabled either due to inactivity (60 days) or
        password has expired - Accounts can be activated using self
        service. Login to
        <a href="http://wiki.rdkcentral.com/" class="external-link"
        rel="nofollow">wiki.rdkcentral.com</a> with the username, you
        will see a message with a link to activate your account. Click
        on the link to activate your account. If you are still facing
        issues with activating your account, please email
        </span><a href="mailto:support@rdkcentral.com" class="external-link"
        rel="nofollow">support@rdkcentral.com</a><span style="color: rgb(0,0,0);">.
        Please update your password after it has been activated.</span>

-   Account is active, but still getting the password reset error.
    -   Unable to login to
        <span style="color: rgb(0,0,0);"><a href="https://code.rdkcentral.com/" class="external-link"
        rel="nofollow">code.rdkcentral.com</a>  with username (All
        LOWERCASE) and password -   If you are getting authentication
        failure, it is possible that your email address is linked with
        another username that you have used previously or you have
        logged in to
        <a href="http://code.rdkcentral.com/" class="external-link"
        rel="nofollow">code.rdkcentral.com</a> with a mixed case
        username. Either case, you can email to
        <a href="mailto:support@rdkcentral.com" class="external-link"
        rel="nofollow">support@rdkcentral.com</a>  to mitigate this
        issue.</span>
    -   <span style="color: rgb(0,0,0);">Able to login to
        <a href="http://code.rdkcentral.com/" class="external-link"
        rel="nofollow">code.rdkcentral.com</a> with username/password -
        try and browse this repo -</span><a
        href="https://code.rdkcentral.com/r/admin/repos/components/generic/mediaframework"
        class="external-link"
        rel="nofollow">https://code.rdkcentral.com/r/admin/repos/components/generic/mediaframework</a><span style="color: rgb(0,0,0);">
        . If you are not able to browse this repo, you can email to
        </span><a href="mailto:support@rdkcentral.com" class="external-link"
        rel="nofollow">support@rdkcentral.com</a><span style="color: rgb(0,0,0);"> 
        to mitigate this issue. if you are able to browse the repo, but
        unable to clone the it is probably  an environment issue. Check
        your .netrc file</span>

<span style="color: rgb(0,0,0);">Update the credentials in $HOME/.netrc
file, a sample of the file is given below </span>

<u><span style="color: rgb(0,0,0);">*.netrc*</span></u>

<span style="color: rgb(0,0,0);">*machine
<a href="http://code.rdkcentral.com/" class="external-link"
rel="nofollow">code.rdkcentral.com</a> login &lt;user-name&gt; password
&lt;Password&gt;*</span>

------------------------------------------------------------------------

  

**<u><span style="color: rgb(0,0,0);">*How to solve "Not having
permission for the requested operation (Service not enabled) error".
Eg:Username for
'<a href="https://code.rdkcentral.com/" class="external-link"
rel="nofollow">https://code.rdkcentral.com</a>': rdknewuser  Password
for
'<a href="https://rdknewuser@code.rdkcentral.com/" class="external-link"
rel="nofollow">https://rdknewuser@code.rdkcentral.com</a>':  fatal:
remote error: Service not enabled  fatal: cannot obtain manifest
<a href="https://code.rdkcentral.com/r/manifests" class="external-link"
rel="nofollow">https://code.rdkcentral.com/r/manifests</a>?*</span></u>**

<span style="color: rgb(0,0,0);"><u>Issue:</u></span>

<span style="color: rgb(0,0,0);">In few incidents, the user may not be
having the required permission to download the code although having a
valid combination of username/password combination.</span>

<span style="color: rgb(0,0,0);"><u>Example console log:</u> </span>

<span style="color: rgb(0,0,0);">Username for
'<a href="https://code.rdkcentral.com/" class="external-link"
rel="nofollow">https://code.rdkcentral.com</a>': rdknewuser</span>

<span style="color: rgb(0,0,0);">Password for
'<a href="https://rdknewuser@code.rdkcentral.com/" class="external-link"
rel="nofollow">https://rdknewuser@code.rdkcentral.com</a>':</span>

<span style="color: rgb(0,0,0);">fatal: remote error: Service not
enabled</span>

<span style="color: rgb(0,0,0);">fatal: cannot obtain manifest
<a href="https://code.rdkcentral.com/r/manifests" class="external-link"
rel="nofollow">https://code.rdkcentral.com/r/manifests</a></span>

<span style="color: rgb(0,0,0);"><a href="https://code.rdkcentral.com/r/manifests" class="external-link"
rel="nofollow"><u>Possible Solution:</u></a></span>

<span style="color: rgb(0,0,0);">Approach RDK support with the necessary
approval to get the requested privilege.</span>

  

------------------------------------------------------------------------

## Build

<u>***How to mask a recipe in a platform build?***</u>

Mask the recipe in platform specific MACHINE conf file and run the
source command again to build.

For example, to MASK ccsp-gwprovapp-ethwan in Rpi build, add below line
in Rpi specific Machine conf file. Add below line in file

“**meta-cmf-raspberrypi/conf/machine/raspberrypi-rdk-broadband.conf ”**

**BBMASK .=
"|.meta-rdk-broadband/recipes-ccsp/ccsp/<a href="http://ccsp-gwprovapp-ethwan.bb/" class="external-link"
rel="nofollow">ccsp-gwprovapp-ethwan.bb</a>"**

Run the source command again to build

**source meta-cmf-raspberrypi/setup-environment  -&gt;**  select
respective conf file

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to solve "Repo init: Syntax error: Invalid syntax"?***</u>

If you encounter below error,

repo: warning: Python 2 is no longer supported; Please upgrade to Python
3.6+.  
Downloading Repo source from
<a href="https://gerrit.googlesource.com/git-repo" class="external-link"
rel="nofollow"
title="https://gerrit.googlesource.com/git-repo">https://gerrit.googlesource.com/git-repo</a>  
remote: Counting objects: 1, done  
remote: Finding sources: 100% (41/41)  
remote: Total 41 (delta 14), reused 41 (delta 14)  
Unpacking objects: 100% (41/41), done.  
Traceback (most recent call last):  
File "&lt;File Path&gt;", line 56, in &lt;module&gt;  
from subcmds.version import Version  
File "&lt;File Path&gt;", line 38, in &lt;module&gt;  
\['%s' % name\])  
File "&lt;File Path&gt;", line 27, in &lt;module&gt;  
from hooks import RepoHook  
File "&lt;File Path&gt;", line 472  
file=sys.stderr)  
^  
SyntaxError: invalid syntax

`Upgrade the repo using below command to use with python3.`

<a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
class="toolbar_item command_help help">?</a>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 100%" />
</colgroup>
<tbody>
<tr class="odd">
<td class="code"><div class="container"
title="Hint: double-click to select code">
<div class="line number1 index0 alt2" data-bidi-marker="true">
<code
class="sourceCode java">curl https<span class="op">:</span></code><code
class="sourceCode java"><span class="co">//storage.googleapis.com/git-repo-downloads/repo-1 &gt; ~/bin/repochmod a+x ~/bin/repopython3 ~/bin/repo init -u &lt;repo URL&gt;python3 ~/bin/repo sync</span></code>
</div>
</div></td>
</tr>
</tbody>
</table>

Make sure that the build machine is having required packages installed
for specific Yocto flavor.  
Eg: <a
href="https://docs.yoctoproject.org/3.2.3/ref-manual/ref-system-requirements.html"
class="external-link" rel="nofollow"
title="https://docs.yoctoproject.org/3.2.3/ref-manual/ref-system-requirements.html">https://docs.yoctoproject.org/3.2.3/ref-manual/ref-system-requirements.html</a>



***Who defines the root filesystem and metadata? ***

Metadata represents the versions of the various components in a
distribution, such as the particular versions of the Linux kernel or
libraries. The project supplies an example set of metadata that can
generate several example distributions. The actual metadata used for the
construction of a custom distribution may be supplied by a commercial
vendor or created by an embedded developer. The root filesystem is
defined in the metadata for a given build of a distribution.

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to view the dependencies of packages and the resulting growth
in code size as packages are added?***</u>

There are tools within BitBake that enable this level of details.

-   “bitbake -g targetname” creates depends.dot and task-depends.dot
    files in the current directory. These files show which packages and
    tasks depend on which other packages and tasks and are useful for
    debugging purposes.
-   "bitbake -g -u depexp targetname" shows results in a more
    human-readable, GUI style. A simple mount of the resulting root
    image will show how much storage space is being used.

In addition, the toaster is a new graphical user interface for BitBake
that makes these tools much easier to use.

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to add a package to my project?***</u>

As with any complex system, the real answer is *it depends*, but of
course that is not very helpful. The simplest method for adding a single
package to your build is to add 

the below line to `conf/local.conf`:

-   IMAGE\_INSTALL\_append = " package"

Use your own package name in place of **package**. Note the leading
space before the package name. If you want to add multiple packages, you
can use multiple lines like the above, or list all packages on a single
line with:

-   IMAGE\_INSTALL\_append = " package1 package2 package3"

Although If you add in local.conf , that is not permanent change. For
permanent addition of that package in final rootfs, you need to be added
in image recipe or any package group which is included in the image
recipe.

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to handle prebuilts? ***</u>

<span style="color: rgb(0,0,0);">Prebuilds are handled internally by
Yocto by using sstate-cache. If a prebuilt from a known good build is
available, the build can point to that folder via the conf file inside
the *./build&lt;buildtype&gt;/conf/* folder so that the prebuilts are
picked up from the location</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How long do the builds/single component builds take?***</u>

<span style="color: rgb(0,0,0);">This depend entirely on multiple
factors like capacity of build machine, first time build or repeated
build in the same work space as well as changes in components on which
the component in question depends on( if there is a change, the
depending component is first built and then the dependent component )
and hence cannot be answered directly.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***What are the commands to build a specific sub-component (WPE,
Utopia etc...)? ***</u>

When you checkout sandbox every component is independently buildable,
and bitbake ( OE's build engine) is responsible to identify and sort the
component dependency chain and ensure its built along. if you were to
build a single component the commands are

    bitbake <component>

where component is in one to one relation with .bb ( recipe ) file that
can be found in the Yocto/OE metadata ( meta-rdk\* layers ) e.g. if you
were to build rdkbrowser then you would see that its recipe is housed in
generic layer called meta-rdk-cmf and recipe is
called <span style="color: rgb(0,0,0);"><a href="http://rdkbrowser.bb/" class="external-link"
rel="nofollow">rdkbrowser.bb</a></span> so the command would be

    bitbake rdkbrowser

However this will only generate CMF component and for packaging it up
into final image you still have to build the image component to
repackage rdkbrowser

    bitbake rdk-generic-hybrid-wpe-image

would generate the CMF generic image for hybrid devices. it will only
rebuild the affected components when building the image if nothing has
changed it will not recreate the image.

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***What is  the substitute for rebuild, build-only, skip-package?
Paying specific attention to when/if any new source is pulled?***</u>

bitbake has division of work into individual tasks for a component.
Secondly, the recipes are wired to notice changes in upstream repository
as well when you do repo sync. You can use below command to see what all
individual tasks are available.

    bitbake -c listtasks <component>

It will show an output like

    do_build                       Default task for a recipe - depends on all other normal tasks required to 'build' a recipe

    do_bundle_initramfs            Combines an initial ramdisk image and kernel together to form a single image

    do_checkuri                    Validates the SRC_URI value

    do_checkuriall                 Validates the SRC_URI value for all recipes required to build a target

    do_clean                       Removes all output files for a target

    do_cleanall                    Removes all output files, shared state cache, and downloaded source files for a target

    do_cleansstate                 Removes all output files and shared state cache for a target

    do_compile                     Compiles the source in the compilation directory

You can rerun any of the above tasks

    bitbake -C compile rdkbrowser

would force recompile of servicemanager, if you wish to perform all the
build steps for a component you can do that too by

    bitbake -c cleansstate rdkbrowser; bitbake rdkbrowser

Similarly, in general you can have:

bitbake &lt;target&gt; -c&lt;task\_to\_be\_executed&gt;

This will ensure do\_&lt;task\_to\_be\_executed&gt;() will be called.

task\_to\_be\_executed can  fetch, unpack, configure, compile, install,
package etc

**If we were to draw parallels**

--rebuild = bitbake -c cleansstate &lt;component&gt; ; bitbake
&lt;component&gt;

--build-only = bitbake &lt;component&gt;

--skip-package is delegated to shared state mechanism to figure out at
present.

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How do we ensure that source code is not updated unless user does
an explicit code fetch using repo sync or a similar command?***</u>

Unless you do 'repo sync' sources will not be updated

'repo sync' can cover only components with external src support, it
means that in cases when SRCREV is set to AUTOREV and component doesn't
support external src, then bitbake will try to update sources from a
remote repository during build time.

There is no documentation for AUTOREV, but it's doing only one
function - check remote repository for any new sources updates.

<table
class="wrapped confluenceTable ite-marked-table ite-virtual-table"
data-ite-table-index="0" data-resolved="">
<tbody>
<tr class="odd" data-ite-row-number="0">
<td class="confluenceTd" style="text-align: left;"
data-ite-col-number="0"><p><code
class="sourceCode java">AUTOREV <span class="op">=</span> </code><code
class="sourceCode java"><span class="st">&quot;${@bb.fetch2.get_autorev(d)}&quot;</span></code></p></td>
</tr>
</tbody>
</table>

You can prevent this behaviour by
changing <span style="color: rgb(0,68,68);">BB\_SRCREV\_POLICY variable
in you local &lt;sandbox&gt;/conf/local.conf</span>

<table
class="wrapped confluenceTable ite-marked-table ite-virtual-table"
data-ite-table-index="1" data-resolved="">
<tbody>
<tr class="odd" data-ite-row-number="0">
<td class="confluenceTd" style="text-align: left;"
data-ite-col-number="0"><p><code
class="sourceCode java">BB_SRCREV_POLICY <span class="op">=</span> </code><code
class="sourceCode java"><span class="st">&quot;cache&quot;</span></code></p></td>
</tr>
</tbody>
</table>

  

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***<span style="color: rgb(0,51,102);">Where does ${D}, ${WORKDIR}
resolve to?</span>***</u>

These are OE metadata variables, bitbake has preprocessing options where
it expands all the local bitbake variables so you could take advantage
of that option to figure it out

    bitbake -e rf4ce | grep "^S ="

    bitbake -e rf4ce | grep "^WORKDIR ="

It can be used to check for any bitbake variable, alternatively you can
pipe the whole bitbake -e output to a file and inspect the file in your
favourite editor

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How do I locate logs for a particular component in the Yocto/OE
folder structure?***</u>

-   <span style="color: rgb(51,51,51);">You can find log files for each
    task in the
    <u>recipe's </u></span><u>`temp`</u><span style="color: rgb(51,51,51);"><u> directory</u>. Log
    files are
    named <u>`log.`</u>*<u>`taskname`</u>`-Eg:compile logs are present in the file log.do_compile. `*</span>Bitbake
    maintains logs separately for each of the tasks that run while
    building the component. These tasks are typically the fetch task,
    the compile task, install task and so on.
-   Eg: For a RPI device, typically logs are present under
    the <span style="color: rgb(0,51,102);">build-raspberrypi-rdk-hybrid//tmp/work/&lt;\*-rdk-linux&gt;</span>
    and under the component directory. Other devices would have logs
    present under similar folders. For instance, logs are present under
    <u>build-raspberrypi-rdk-hybrid/tmp/work/&lt;\*-rdk-linux&gt;/rdkbrowser/1.99+gitAUTOINC+8c3f17fdc6\_fa6c8b4334\_dc33f7d6bc\_4bc1f2f4c9-r0/temp</u>

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to fix Werror unused parameter warning error during
compilation?***</u>

The warnings like -Werror -Wall -Wextra are turned on for compiler for
most of the Ccsp components .All these warnings must be fixed for
successful compilation as all warnings are treated as errors.

Werrors due to unused parameters in code can be fixed by using:

UNREFERENCED\_PARAMETER(user\_data); ,if user\_data variable is not used
in the scope of definition of the function .

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to solve the error occured during enabling net-snmp in
device?***</u>

    * satisfy_dependencies_for: Cannot satisfy the following dependencies for packagegroup-...:

    *             net-snmp *

    * opkg_install_cmd: Cannot install package packagegroup-....

**<span class="s1">The above error indicates that :</span>**

<span class="s1">You asked for adding net-snmp ( the package ) not ( the
recipe ) </span>now net-snmp ( the recipe ) may generate a number of (
packages ) so you should add the packages ( runtime items) to the
package groups and not the recipes ( build time items). Usually yocto/OE
does generate a output package with same name as input recipe so
for <a href="http://net-snmp.bb/" class="external-link"
style="text-decoration: none;" rel="nofollow">net-snmp.bb</a> there will
be a net-snmp ipk but thats just a common case not a hard and fast rule.

<span class="s1">Now in this particular case when a package has nothing
to emit into the ${PN} package the package is left empty and hence
</span>not emitted. If you want to emit the package regardless you have
to add

ALLOW\_EMPTY\_&lt;package&gt; = "1" in the recipe,but this is less of a
usecase to demand empty packages. If you expressed the packagegroup
RDEPENDS correctly you would not need it.

------------------------------------------------------------------------

------------------------------------------------------------------------

  
<u>***If my workspace has a large sstate-cache, how can I make it lean
?***</u>

sstate-cache is always adding new versions and hence is growing in size
always, thankfully we have a tool in Yocto to manage it, here is a
sample on how to do it for **raspberrypi** you can set WORKSPACE and
MACH variables to point to the values for machine  
**sstate-manage.sh**

****  
****

<a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
class="toolbar_item command_help help">?</a>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 100%" />
</colgroup>
<tbody>
<tr class="odd">
<td class="code"><div class="container"
title="Hint: double-click to select code">
<div class="line number1 index0 alt2" data-bidi-marker="true">
<code
class="sourceCode java"># cd into top of workspace say $<span class="op">{</span>WORKSPACE<span class="op">}</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code
class="sourceCode java">MACH<span class="op">=</span>raspberrypi</code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code
class="sourceCode java">MACHINE<span class="op">=</span>$<span class="op">{</span>MACH<span class="op">}</span> <span class="op">.</span> <span class="op">./</span>meta<span class="op">-</span>rdk<span class="op">/</span>setup<span class="op">-</span>environment</code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code
class="sourceCode java">EXTRALAYERS<span class="op">=</span>`bitbake <span class="op">-</span>e <span class="op">|</span> grep </code><code
class="sourceCode java"><span class="er">&#39;</span><span class="op">^</span>BBLAYERS<span class="op">=</span><span class="er">&#39;</span></code><code
class="sourceCode java"><span class="op">|</span> tr <span class="op">-</span>s </code><code
class="sourceCode java"><span class="ch">&#39; &#39;</span></code> <code
class="sourceCode java"><span class="ch">&#39;,&#39;</span></code><code
class="sourceCode java"><span class="op">|</span> tr <span class="op">-</span>d </code><code
class="sourceCode java"><span class="ch">&#39;&quot;&#39;</span></code><code
class="sourceCode java"><span class="op">|</span> sed <span class="op">-</span>e </code><code
class="sourceCode java"><span class="er">&#39;</span>s<span class="op">%^</span>BBLAYERS<span class="op">=%%</span><span class="er">&#39;</span></code> <code
class="sourceCode java"><span class="op">-</span>e </code><code
class="sourceCode java"><span class="er">&#39;</span>s<span class="op">%,</span>$<span class="op">%%</span><span class="er">&#39;</span></code><code
class="sourceCode java">`</code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code class="sourceCode java"># remove stale sstate on mirror</code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code
class="sourceCode java">$<span class="op">{</span>WORKSPACE<span class="op">}/</span>openembedded<span class="op">-</span>core<span class="op">/</span>scripts<span class="op">/</span>sstate<span class="op">-</span>cache<span class="op">-</span>management<span class="op">.</span><span class="fu">sh</span> <span class="op">-</span>v <span class="op">--</span>yes \</code>
</div>
<div class="line number7 index6 alt2" data-bidi-marker="true">
<code class="sourceCode java">          </code><code
class="sourceCode java"><span class="op">--</span>extra<span class="op">-</span>layer<span class="op">=</span>$<span class="op">{</span>EXTRALAYERS<span class="op">}</span> \</code>
</div>
<div class="line number8 index7 alt1" data-bidi-marker="true">
<code class="sourceCode java">          </code><code
class="sourceCode java"><span class="op">--</span>cache<span class="op">-</span>dir<span class="op">=</span>$<span class="op">{</span>WORKSPACE<span class="op">}/</span>sstate<span class="op">-</span>cache \</code>
</div>
<div class="line number9 index8 alt2" data-bidi-marker="true">
<code class="sourceCode java">          </code><code
class="sourceCode java"><span class="op">--</span>stamps<span class="op">-</span>dir<span class="op">=</span>$<span class="op">{</span>WORKSPACE<span class="op">}/</span>build<span class="op">-</span>$<span class="op">{</span>MACH<span class="op">}/</span>tmp<span class="op">/</span>stamps</code>
</div>
</div></td>
</tr>
</tbody>
</table>

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to enabled/disable kernel/busybox features in Yocto? ***</u>

 To enable kernel/busybox features you can append metadata to the
recipes (i.e. .bb files) by simply creating an append file (i.e.
.bbappend files) and including metadata in it. If the features needs to
be enabled across all the platforms then add in **meta-rdk-rpi** meta or
if it's specific to a platform then append to the recipes available in
OEM layer specific to the platform.

Below example shows how to enable IPSec on Yocto builds:  

-   Create a stblinux\_%.bbappend
-   Create a file called enable\_netkey.cfg with following content   
       CONFIG\_NET\_KEY=y
-   Add SRC\_URI\_append = “<span style="text-decoration: none;"
    rel="nofollow">file://enable\_netkey.cfg</span> "

Make sure .bbappend has the same root name as their corresponding .bb
recipes.

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to resolve repo sync failures when the branch is few commits
behind the master or when it has uncommitted changes?***</u>

-   <span style="color: rgb(0,0,0);">Sometimes when you have a working
    branch which is not checked out or has uncommitted changes then repo
    will fail when you try to sync to the latest code base.</span>

-   Sample failure logs:

error: generic/devicesettings/generic/: contains uncommitted changes

error: generic/rdkbrowser/: branch master is published (but not merged)
and is now 11 commits behind

error: meta-rdk-oem-X/: contains uncommitted changes

-   <span style="color: rgb(0,0,0);">To resolve this you need to
    checkout the branch and rebase it to the master using below
    commands.</span>

git rebase —abort

git rebase rdkgerrit/master ( or rdkgerrit/stable2)

-   <span style="color: rgb(0,0,0);">During the process git might throw
    conflict errors if it cannot merge files automatically. Then you
    need </span><span style="color: rgb(0,0,0);">to merge manually using
    Vim or any other text editors. But it can be simple if you know
    exactly what changes </span><span style="color: rgb(0,0,0);">needs
    to be saved / removed.</span>
-   <span style="color: rgb(0,0,0);">For example you can use below
    command to keep your changes</span>

git checkout --ours FILE

-   <span style="color: rgb(0,0,0);">If you want to run on multiple
    files then use below command.</span>

grep -lr ‘&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;’.  |  xargs git checkout
--ours

-   <span style="color: rgb(0,0,0);">Similarly,  you can use below
    commands if you want to keep other changes.</span>

git checkout --yours FILE

grep -lr ‘&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;’.  |  xargs git checkout
–theirs

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to move files under PACKAGES to "-dev" pacakge to use for
development and debugging purpose?***</u>

-   Verify the files from which recipe they are being generated under
    build-&lt;platform&gt;/buildhistory/packages/mips32el-rdk-linux
    folder
-   Add the below line format under that particular recipe.

FILES\_${PN}-dev += " file1 file2 etc"

-   Verify that *cat &lt;package&gt;-dev/latest  *should contain these
    files under FILELIST. 

  

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How do I find which package provides a file in target file
system?***</u>

Yocto project build system has a utility which can provide information
about which package (ipk or rpm) is providing a given file, this helps
in finding further information on packaging e.g. if you want to do more
finer packaging, run the following command in your build environment

oe-pkgdata-util find-path
/lib/<a href="http://libc.so/" class="external-link"
rel="nofollow">libc.so</a>.6  
glibc: /lib/<a href="http://libc.so/" class="external-link"
rel="nofollow">libc.so</a>.6

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to debug a common build failure seen during rootfs
creation?***</u>

Common build failures are reported in Yocto builds. Some build failures
are hard to analyze with logs, unless we get access to the failure
workspace. In most cases they are hard to reproduce on local workspace.
We go through multiple iteration of builds, lock down the node and then
debug. To debug these failures use Packages file found under
*tmp/deploy/ipk* directory on you local workspace .

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***how to enable GDB in build?***</u>

The signal core dump that are generated under /tmp can be decoded using
gdb  
<u>Procedure :</u>

1.  In &lt;image&gt;.bbappend file  
    IMAGE\_INSTALL\_append = " gdb"
2.  In local.conf  
    INCOMPATIBLE\_LICENSE = "GPL-3.0 LGPL-3.0 AGPL-3.0"  
    INCOMPATIBLE\_LICENSE\_pn-gdb = ""  
    EXTRA\_IMAGE\_FEATURES += "tools-debug"  
    EXTRA\_IMAGE\_FEATURES += "dbg-pkgs"
3.  In &lt;component&gt;.bbappend  
    CFLAGS += " -D\_DEBUG -g "
4.  Compile and flash the binary to device
5.  Run gdb -c &lt;path to signal dump&gt; &lt;binary&gt;

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to solve this Build issue - Platform target mismatch Error:
File format not recognized?***</u>

This should be because of architecture bit mismatch . To overcome this
should either choose the right target platform or put the executable
file as a tar file in bb file.

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to resolve insufficient storage space issue in the build
host""ERROR: No new tasks can be executed since the disk space monitor
action is "STOPTASKS"?***</u>

<span style="color: rgb(0,0,0);">**<u>Issue:</u>**</span>

<span style="color: rgb(0,0,0);">While building the stack, the bitbake
process will be aborted if the disk space runs low beyond the minimum
requirement.</span>

<span style="color: rgb(0,0,0);">**<u>Example console log:</u>**</span>

<span style="color: rgb(0,0,0);">WARNING: The free space of
/mnt/home/gpsahu01/cmf/test/build-qemux86hyb/tmp (/dev/vdb) is running
low (0.999GB left)</span>

<span style="color: rgb(0,0,0);">ERROR: No new tasks can be executed
since the disk space monitor action is "STOPTASKS"!</span>

<span style="color: rgb(0,0,0);">WARNING: The free space of
/mnt/home/gpsahu01/cmf/test/downloads (/dev/vdb) is running low (0.095GB
left)</span>

<span style="color: rgb(0,0,0);">ERROR: Immediately abort since the disk
space monitor action is "ABORT"!</span>

<span style="color: rgb(0,0,0);">NOTE: Sending SIGTERM to remaining 1
tasks</span>

<span style="color: rgb(0,0,0);"><u>**Possible solution:**</u></span>

<span style="color: rgb(0,0,0);">Yocto stack requires more than 30 GB of
free disk space for build to complete, so it is required to keep
sufficient disk space available before starting the build
process.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to resolve missing “sys/cdefs.h” issue in random recipe files
which might give "ERROR: oe\_runmake failed" error?***</u>

<span style="color: rgb(0,0,0);">**<u>Issue:</u>**</span>

<span style="color: rgb(0,0,0);">Bitbake complains about a missing
“sys/cdefs.h” and the error can be encountered in random recipes when we
move from one build host to other.</span>

<span style="color: rgb(0,0,0);">**<u>Example console log:</u>** </span>

<span style="color: rgb(0,0,0);">compilation terminated.</span>  
<span style="color: rgb(0,0,0);">| In file included from
/usr/include/stdio.h:27:0,</span>  
<span style="color: rgb(0,0,0);">|                  from
./src/kern\_head.c:13:</span>  
<span style="color: rgb(0,0,0);">| /usr/include/features.h:374:25: fatal
error: sys/cdefs.h: No such file or directory</span>  
<span style="color: rgb(0,0,0);">|  \#  include
&lt;sys/cdefs.h&gt;</span>  
<span style="color: rgb(0,0,0);">|                          ^</span>  
<span style="color: rgb(0,0,0);">| compilation terminated.</span>  
<span style="color: rgb(0,0,0);">| In file included from
/usr/include/stdio.h:27:0,</span>  
<span style="color: rgb(0,0,0);">|                  from
./src/sstrip.c:9:</span>  
<span style="color: rgb(0,0,0);">| /usr/include/features.h:374:25: fatal
error: sys/cdefs.h: No such file or directory</span>  
<span style="color: rgb(0,0,0);">|  \#  include
&lt;sys/cdefs.h&gt;</span>  
<span style="color: rgb(0,0,0);">|                          ^</span>  
<span style="color: rgb(0,0,0);">| compilation terminated.</span>  
<span style="color: rgb(0,0,0);">| make: \*\*\* \[encode\] Error
1</span>  
<span style="color: rgb(0,0,0);">| make: \*\*\* Waiting for unfinished
jobs....</span>  
<span style="color: rgb(0,0,0);">| make: \*\*\* \[kern\_head\] Error
1</span>  
<span style="color: rgb(0,0,0);">| make: \*\*\* \[sstrip\] Error
1</span>  
<span style="color: rgb(0,0,0);">| ERROR: oe\_runmake failed</span>  
<span style="color: rgb(0,0,0);">| WARNING: exit code 1 from a shell
command</span>

<span style="color: rgb(0,0,0);"><a href="https://code.rdkcentral.com/r/manifests" class="external-link"
rel="nofollow"><u><strong>Possible Solution:</strong></u></a></span>

<span style="color: rgb(0,0,0);">This issue may be caused by a missing
“g++-multilib” package in the build host (observed in Ubuntu 14.4).
Installing the package with “sudo apt-get install g++-multilib” should
resolve this issue. Also the build machines should be configured
following the procedure as per Setup guide to avoid similar
issues.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***Bitbake complains about a non-existent path, invalid environment
variable etc. with "ERROR: Function failed","ERROR: ParseError"? How to
resolve this?***</u>

<span style="color: rgb(0,0,0);">**<u>Issue:</u>**</span>

<span style="color: rgb(0,0,0);">The bitbake process terminates after
complaining about a non-existent path or environment variable.</span>

<span style="color: rgb(0,0,0);">**<u>Example console log
\#1:</u>**</span>

<span style="color: rgb(0,0,0);">ERROR: Function failed: iarmbus:
LIC\_FILES\_CHKSUM points to an invalid file:
${RDK\_ROOT\_PATH}/components/generic/iarmbus/core/include/libIARM.h</span>

<span style="color: rgb(0,0,0);">**<u>Example console log
\#2:</u>**</span>

<span style="color: rgb(0,0,0);">ERROR: ParseError at
/mnt/home/gpsahu01/cmf/test/meta-virtualization/recipes-extended/images/<a href="http://cloud-image-controller.bb/" class="external-link"
rel="nofollow">cloud-image-controller.bb</a>:29: Could not inherit file
classes/image-vm.bbclass</span>

<span style="color: rgb(0,0,0);"><u>**Possible solution:**</u></span>

<span style="color: rgb(0,0,0);">This may be due to a wrongly setup
environment e.g. we have executed “meta-rdk/setup-environment” instead
of sourcing “meta-cmf/setup-environment”</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***Bitbake fails with "fatal: Not a git repository" after selection
of option in meta-cmf/setup-environment, and why?***</u>

<span style="color: rgb(0,0,0);">**<u>Issue:</u>**</span>

<span style="color: rgb(0,0,0);">The issue is observed during setup and
machine selection stage, setup-environment script will throw unexpected
error about non-existing layer paths.</span>

<span style="color: rgb(0,0,0);">**<u>Example console log:</u>**</span>

<span style="color: rgb(0,0,0);">gpsahu01@dvm-wcdcc-tata-001:~/cmf/emulator-2.1-20160919$
source meta-cmf/setup-environment</span>

<span style="color: rgb(0,0,0);">1)
meta-raspberrypi/conf/machine/raspberrypi0.conf             7)
meta-rdk-bsp-emulator/conf/machine/qemux86hyb.conf</span>

<span style="color: rgb(0,0,0);">2)
meta-raspberrypi/conf/machine/raspberrypi2.conf             8)
meta-rdk-bsp-emulator/conf/machine/qemux86mc.conf</span>

<span style="color: rgb(0,0,0);">\[…\]</span>

<span style="color: rgb(0,0,0);">Please enter your choice of machine
\[1..11\]: 7</span>

<span style="color: rgb(0,0,0);">\### Shell environment set up for
builds. \###</span>

<span style="color: rgb(0,0,0);">Writing auto.conf ...</span>

<span style="color: rgb(0,0,0);">Writing versions.txt ...</span>

<span style="color: rgb(0,0,0);">-bash: cd: ../meta-browser//: No such
file or directory</span>

<span style="color: rgb(0,0,0);">fatal: Not a git repository (or any
parent up to mount point /mnt)</span>

<span style="color: rgb(0,0,0);">Stopping at filesystem boundary
(GIT\_DISCOVERY\_ACROSS\_FILESYSTEM not set).</span>

<span style="color: rgb(0,0,0);">-bash:
../patches/rdk-oe/meta-linaro//\*.patch: No such file or
directory</span>

<span style="color: rgb(0,0,0);">-bash: cd: ../meta-openembedded//: No
such file or directory</span>

<span style="color: rgb(0,0,0);">fatal: Not a git repository (or any
parent up to mount point /mnt)</span>

<span style="color: rgb(0,0,0);">Stopping at filesystem boundary
(GIT\_DISCOVERY\_ACROSS\_FILESYSTEM not set).</span>

<span style="color: rgb(0,0,0);"><u>**Possible solution:**</u></span>

<span style="color: rgb(0,0,0);">If the host PC has set colored terminal
output for commands then it may cause unexpected errors being shown
during execution of meta-cmf/setup-environment script. To fix the
problem we can run following command:</span>

<span style="color: rgb(0,0,0);">**gpsahu01@dvm-wcdcc-tata-001:~/cmf/emulator-2.1-20160919$
alias ls='ls --color=no'**</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***Network related issues:***</u>

<u>***a) How to resolve "Fetch failure/ timeout errors" Eg:"error:
Exited sync due to fetch errors"?***</u>

<span style="color: rgb(0,0,0);">**<u>Issue:</u>**</span>

<span style="color: rgb(0,0,0);">Fetch timeout or failure can happen due
to following network problems.</span>

<span style="color: rgb(0,0,0);">-          Network not
accessible</span>

<span style="color: rgb(0,0,0);">-          Restriction in
Firewall</span>

<span style="color: rgb(0,0,0);">-          Invalid Proxy
configuration</span>

<span style="color: rgb(0,0,0);">-          Unable to resolve DNS in
IPv6 networks</span>

<span style="color: rgb(0,0,0);">**<u>Example console log:</u>**</span>

<span style="color: rgb(0,0,0);">Fetching projects: 96% (91/94) Fetching
project openembedded/meta-linaro</span>  
<span style="color: rgb(0,0,0);">Fetching projects: 97% (92/94) fatal:
read error: Connection timed out</span>  
<span style="color: rgb(0,0,0);">fatal: read error: Connection timed
out</span>  
<span style="color: rgb(0,0,0);">fatal: read error: Connection timed
out</span>  
<span style="color: rgb(0,0,0);">error: Cannot fetch
meta-virtualization</span>  
<span style="color: rgb(0,0,0);">warn: --force-broken, continuing to
sync</span>  
<span style="color: rgb(0,0,0);">Fetching projects: 98% (93/94) error:
Cannot fetch meta-java</span>  
<span style="color: rgb(0,0,0);">warn: --force-broken, continuing to
sync</span>  
<span style="color: rgb(0,0,0);">Fetching projects: 100% (94/94)
</span>  
<span style="color: rgb(0,0,0);">error: Exited sync due to fetch
errors</span>

<span style="color: rgb(0,0,0);"><u>**Possible solution:**</u></span>

<span style="color: rgb(0,0,0);">-          Using VPN may have some
restrictions sometime it may not allow GIT access.</span>

<span style="color: rgb(0,0,0);">-          Ensure that the ports for
HTTPS, SSH, HTTP are opened by the firewall and the policy doesn’t block
common open source repositories.</span>

<span style="color: rgb(0,0,0);">-          In case of IPv6 networks
issues, force GIT to use IPv4.</span>

<span style="color: rgb(0,0,0);">Also Following options can be
considered while debugging:</span>

<span style="color: rgb(0,0,0);">**Option \#1)** Need to flush the IP
rules: </span>  
<span style="color: rgb(0,0,0);">enter the command </span>  
<span style="color: rgb(0,0,0);">$ iptables -F</span>  
<span style="color: rgb(0,0,0);">and check </span>  
<span style="color: rgb(0,0,0);">$) git clone
<a href="git://git.lighttpd.net/lighttpd/lighttpd-1.x.git"
rel="nofollow">git://git.lighttpd.net/lighttpd/lighttpd-1.x.git</a></span>

<span style="color: rgb(0,0,0);">**Option \#2)** Check for the port 22
is open or not by doing nmap</span>  
<span style="color: rgb(0,0,0);">$ nmap -p 22 10.11.107.0-255" </span>  
<span style="color: rgb(0,0,0);">(check for ipaddress
10.11.106.62)</span>  
<span style="color: rgb(0,0,0);">$ ssh -v
<a href="mailto:git@github.com" class="external-link"
rel="nofollow">git@github.com</a></span>  
<span style="color: rgb(0,0,0);">if it adds it will ask for
input()yes/no- Type yes</span>  
<span style="color: rgb(0,0,0);">$ git clone <a
href="git://github.com/lighttpd/lighttpd1.4.git;branch=lighttpd-1.5.x"
rel="nofollow">git://github.com/lighttpd/lighttpd1.4.git;branch=lighttpd-1.5.x</a></span>

<span style="color: rgb(0,0,0);">**Option \#3)** replacing the git//
with https:// which uses port 443 </span>  
<span style="color: rgb(0,0,0);">$ git config --global
url."https://".instead of git://</span>  
<span style="color: rgb(0,0,0);">and try $ "git clone
<a href="git://git.lighttpd.net/lighttpd/lighttpd-1.x.git"
rel="nofollow">git://git.lighttpd.net/lighttpd/lighttpd-1.x.git</a>"</span>

<span style="color: rgb(0,0,0);">**Option \#4)** in a few cases, the
access to GIT repository is via SSH. To use SSH URLs with GIT
repository, an SSH key-pair must be generated on the build PC and add
the public key to your GitHub account. </span>  
<span style="color: rgb(0,0,0);">For information on setting up an SSH
key-pair, see "Generating an SSH key."</span>  
<span style="color: rgb(0,0,0);"><a href="https://help.github.com/articles/generating-an-ssh-key/"
class="external-link"
rel="nofollow">https://help.github.com/articles/generating-an-ssh-key/</a></span>

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***Open source software related issue:***</u>

<u>***a)Unable to find revision or branch from upstream  "ERROR: Fetcher
failure: Unable to find revision ,ERROR: Function failed: Fetcher
failure for URL", How to solve this?***</u>

<span style="color: rgb(0,0,0);">**<u>Issue:</u>**</span>

<span style="color: rgb(0,0,0);">When we try to build a very old branch
of the code, the manifest file will not be up-to-date as few of the
open-source URLs might not be continuing support of older branches or
versions of software.</span>

<span style="color: rgb(0,0,0);">**<u>Example console log:</u>**</span>

<span style="color: rgb(0,0,0);">WARNING: Failed to fetch URL
<a href="git://code.qt.io/qt/qtlocation.git;branch=stable"
rel="nofollow">git://code.qt.io/qt/qtlocation.git;branch=stable</a>,
attempting MIRRORS if available</span>  
<span style="color: rgb(0,0,0);">ERROR: Fetcher failure: Unable to find
revision f28408346243cf090326f4738fd838219c21e00f in branch stable even
from upstream</span>  
<span style="color: rgb(0,0,0);">ERROR: Function failed: Fetcher failure
for URL: '<a href="git://code.qt.io/qt/qtlocation.git;branch=stable"
rel="nofollow">git://code.qt.io/qt/qtlocation.git;branch=stable</a>'.
Unable to fetch URL from any source</span>

<span style="color: rgb(0,0,0);"><u>**Possible solution:**</u></span>

<span style="color: rgb(0,0,0);">It is recommended to build with more
recent branches, as the code will be well maintained and will have
updated features.</span>

------------------------------------------------------------------------

<u>***b)How to resolve problems caused due to the source URL is no
longer available/ site is down with the error "ERROR: Function failed:
Fetcher failure for URL?"***</u>

<span style="color: rgb(0,0,0);">**<u>Issue:</u>**</span>

<span style="color: rgb(0,0,0);">An Open source URL is broken either due
to the website is down temporarily or it is permanently removed.</span>

<span style="color: rgb(0,0,0);">**<u>Example console log:</u>** </span>

<span style="color: rgb(0,0,0);">WARNING: Failed to fetch URL <a
href="http://directfb.org/downloads/Core/linux-fusion/linux-fusion-9.0.3.tar.gz"
class="external-link" rel="nofollow"
title="Follow link">http://directfb.org/downloads/Core/linux-fusion/linux-fusion-9.0.3.tar.gz</a>,
attempting MIRRORS if available</span>  
<span style="color: rgb(0,0,0);">ERROR: Fetcher failure: Fetch command
failed with exit code 4, no output</span>  
<span style="color: rgb(0,0,0);">ERROR: Function failed: Fetcher failure
for URL: '<a
href="http://directfb.org/downloads/Core/linux-fusion/linux-fusion-9.0.3.tar.gz"
class="external-link"
rel="nofollow">http://directfb.org/downloads/Core/linux-fusion/linux-fusion-9.0.3.tar.gz</a>'.
Unable to fetch URL from any source</span>

<span style="color: rgb(0,0,0);"><a href="https://code.rdkcentral.com/r/manifests" class="external-link"
rel="nofollow"><u><strong>Possible Solution:</strong></u></a></span>

<span style="color: rgb(0,0,0);">**Temporary workaround:** In case of
archives (.tar or .zip etc.), if the file is available from a previously
built stack then it can be copied and an empty file with the name
&lt;archive-name&gt;.done has to be created to bypass looking for
downloading the file.</span>

<span style="color: rgb(0,0,0);">**Fixing the recipe:** If the
problematic recipe is available from any other alternative mirror,
update the same in SRC\_URI part of the recipe. Few components may be
available in common mirrors such as github,
<a href="http://web.archive.org/" class="external-link"
rel="nofollow">web.archive.org</a>,
<a href="http://oipf.tv/" class="external-link"
rel="nofollow">oipf.tv</a> etc.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***While building image for "rdk-generic-mediaclient-image”, the
build is almost completed (98%) but getting virtual memory exhausted
error and the build fails with failed with exit code '1'  for
wpe-webkit. What is the solution?***</u>

<span style="color: rgb(0,0,0);">Looks like memory issue hence changing
Ubuntu to 64 bit version should resolve the issue. The below are the
Ubuntu configurations,</span>

-   <span style="color: rgb(0,0,0);">Ubuntu 16.04 - 64 bit</span>
-   <span style="color: rgb(0,0,0);">6GB RAM</span>

<span style="color: rgb(0,0,0);">16GB Swap</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to enable/disable a FEATURE in build?***</u>

To include a specific feature that is not available in base build,
enable the feature specific DISTRO flag in platform specific config
file. For example to include USPA feature in Rpi build,

Add the DISTRO specific flag in Rpi platform specific conf file

In File **meta-cmf-raspberrypi/conf/distro/include/rdk-rpi.inc**

Add **DISTRO\_FEATURES\_append = " usppa" (to include the feature if not
there)**

**DISTRO\_FEATURES\_remove = " usppa" (to remove the feature)**

  

**Make sure the recipe is part of the package build**

In File
**meta-rdk/recipes-core/packagegroups/<a href="http://packagegroup-rdk-ccsp-broadband.bb/"
class="external-link"
rel="nofollow">packagegroup-rdk-ccsp-broadband.bb</a>** must be included
as a DISTRO protected feature
**RDEPENDS\_packagegroup-rdk-ccsp-broadband += " \\
${@bb.utils.contains('DISTRO\_FEATURES', 'usppa', "usp-pa", "", d)}"**

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to solve error due to RDK\_FLAVOR not defined?***</u>

    ERROR: ParseError at /home/a1602446/build-raspberrypi-rdk-broadband/conf/local.conf:247: Could not include required file conf/distro/include/##RDK_FLAVOR##.inc

  

Above error occurs intermittently, which can be fixed by retrying the
source command for setup\_environment file.

In case of Rpi, it is 

-   **source meta-cmf-raspberrypi/setup-environment**

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to enable or disable any feature using macro?***</u>

Please refer <a
href="https://wiki.rdkcentral.com/display/RDK/Compile-time+Build+Variants+Flags"
rel="nofollow">Compile-time Build Variants Flags</a>

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***Random issues appearing when the previous build process was
aborted***</u>

<span style="color: rgb(0,0,0);">**<u>Issue:</u>**</span>

<span style="color: rgb(0,0,0);">Bitbake fails on populate sysroot state
when building with an un-clean stack.</span>

<span style="color: rgb(0,0,0);">**<u>Example console log:</u>**</span>

<span style="color: rgb(0,0,0);">ERROR: Function failed:
llvm\_sysroot\_preprocess (log file is located at
/mnt/home/gpsahu01/cmf/test/build-qemux86hyb/tmp/work/i586-rdk-linux/llvm3.3/3.3-r0/temp/log.do\_populate\_sysroot.9648)</span>

<span style="color: rgb(0,0,0);"><u>**Possible solution:**</u></span>

<span style="color: rgb(0,0,0);">This may happen when a previous build
process was unexpectedly terminated or aborted. Re-build after cleaning
the problematic recipe or image (bitbake &lt;recipe&gt; -c cleanall)
would fix the issue.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***Issues related to patching (ERROR: Function failed:
patch\_do\_patch)***</u>

<span style="color: rgb(0,0,0);">**<u>Issue:</u>**</span>

<span style="color: rgb(0,0,0);">Bitbake terminates the compilation
process on ‘do\_patch’ task. This may happen in following cases:</span>

<span style="color: rgb(0,0,0);">-          When using an old recipe
file where the SRC\_URI link has updated its folder structure.</span>

<span style="color: rgb(0,0,0);">-          Wrongly formatted patch file
(run dos2unix for conversion)</span>

<span style="color: rgb(0,0,0);">-           Incorrect patch level (p0,
p1, etc.)</span>

<span style="color: rgb(0,0,0);">**<u>Example console log:</u>**</span>

<span style="color: rgb(0,0,0);">ERROR: Command Error: exit status: 1
Output:</span>  
<span style="color: rgb(0,0,0);">Applying patch
<a href="http://0001-src-makefile.am/" class="external-link"
rel="nofollow">0001-src-Makefile.am</a>-Dont-check-if-we-are-cross-compiling.patch</span>  
<span style="color: rgb(0,0,0);">can't find file to patch at input line
18</span>  
<span style="color: rgb(0,0,0);">Perhaps you used the wrong -p or
--strip option?</span>  
<span style="color: rgb(0,0,0);">The text leading up to this
was:</span>  
<span style="color: rgb(0,0,0);">--------------------------</span>

<table
class="wrapped confluenceTable ite-marked-table ite-virtual-table"
data-ite-table-index="2" data-resolved="">
<tbody>
<tr class="odd" data-ite-row-number="0">
<td class="confluenceTd" data-ite-col-number="0"><p><span
style="color: rgb(0,0,0);">diff --git a/src/<a
href="http://makefile.am/" class="external-link"
rel="nofollow">Makefile.am</a> b/src/<a href="http://makefile.am/"
class="external-link" rel="nofollow">Makefile.am</a></span></p></td>
</tr>
<tr class="even" data-ite-row-number="1">
<td class="confluenceTd" data-ite-col-number="0"><p><span
style="color: rgb(0,0,0);">index eb50e37..c1e3d64 100644</span></p></td>
</tr>
<tr class="odd" data-ite-row-number="2">
<td class="confluenceTd" data-ite-col-number="0"><p><span
style="color: rgb(0,0,0);">— a/src/<a href="http://makefile.am/"
class="external-link" rel="nofollow">Makefile.am</a></span></p></td>
</tr>
<tr class="even" data-ite-row-number="3">
<td class="confluenceTd" data-ite-col-number="0"><p><span
style="color: rgb(0,0,0);">+++ b/src/<a href="http://makefile.am/"
class="external-link" rel="nofollow">Makefile.am</a></span><br />
<span style="color: rgb(0,0,0);">--------------------------</span><br />
<span style="color: rgb(0,0,0);">No file to patch. Skipping
patch.</span><br />
<span style="color: rgb(0,0,0);">2 out of 2 hunks ignored</span><br />
<span style="color: rgb(0,0,0);">Patch <a
href="http://0001-src-makefile.am/" class="external-link"
rel="nofollow">0001-src-Makefile.am</a>-Dont-check-if-we-are-cross-compiling.patch
does not apply (enforce with -f)</span><br />
<span style="color: rgb(0,0,0);">ERROR: Function failed:
patch_do_patch</span></p></td>
</tr>
</tbody>
</table>

<span style="color: rgb(0,0,0);"><a href="https://code.rdkcentral.com/r/manifests" class="external-link"
rel="nofollow"><u><strong>Possible Solution:</strong></u></a></span>

<span style="color: rgb(0,0,0);">From the above output it seems that the
file to which patch will be applied is not found, possible reason may be
the source folder structure doesn’t match with the destination folder
structure. E.g. the source directory or **${S}** starts from the
relative path **‘src’** folder and we are trying to patch outside of
it.</span>

<span style="color: rgb(0,0,0);">By default bitbake patches the files
with patch level ‘p1’ so creating a patch file which matches destination
folder structure would solve this issue. Another option is to alter the
patch level. E.g.</span>

<span style="color: rgb(0,0,0);">**SRC\_URI +=**
**<a href="file://docsis_3383.patch%3Bstriplevel%3D0/"
class="external-link"
rel="nofollow">file://docsis_3383.patch;striplevel=0</a>**</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***Invalid md5sum error (md5sum mismatch in recipe,ERROR:
gst-plugins-playersinkbin-noop: md5 data is not matching)***</u>

<span style="color: rgb(0,0,0);">**<u>Issue:</u>**</span>

<span style="color: rgb(0,0,0);">Bitbake complains about md5sum mismatch
when a recipe has retained old md5sum value while the source file is
updated.</span>

<span style="color: rgb(0,0,0);">**<u>Example console log:</u>**</span>

<span style="color: rgb(0,0,0);">ERROR: gst-plugins-playersinkbin-noop:
md5 data is not matching for <a
href="file://gstplayersinkbin.c%3Bmd5%3D0f518921aef846c156f91ce4dd6b7c76/"
class="external-link"
rel="nofollow">file://gstplayersinkbin.c;md5=0f518921aef846c156f91ce4dd6b7c76</a>
</span>  
<span style="color: rgb(0,0,0);">ERROR: gst-plugins-playersinkbin-noop:
The new md5 checksum is 958142c8f2783c6c4f357f561585b4da</span>

<span style="color: rgb(0,0,0);"><u>**Possible solution:**</u></span>

<span style="color: rgb(0,0,0);">Update the new md5sum value of the file
in recipe. This can be done using following steps:</span>

<span style="color: rgb(0,0,0);">:…/meta-rdk/recipes-extended/gst-plugins-playersinkbin/files$
md5sum -t gstplayersinkbin.c</span>  
<span style="color: rgb(0,0,0);">958142c8f2783c6c4f357f561585b4da
gstplayersinkbin.c</span>

<span style="color: rgb(0,0,0);">Now change the above value in
recipe:</span>

<span style="color: rgb(0,0,0);">LIC\_FILES\_CHKSUM = "<a
href="file://gstplayersinkbin.c%3Bmd5%3D958142c8f2783c6c4f357f561585b4da/"
class="external-link"
rel="nofollow">file://gstplayersinkbin.c;md5=958142c8f2783c6c4f357f561585b4da</a>
\\</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to solve ”Invalid syntax” error due to python version mismatch
during repo commands?***</u>

**Example Console Log** **:**

repo: warning: Python 2 is no longer supported; Please upgrade to Python
3.6+.  
Downloading Repo source from
<a href="https://gerrit.googlesource.com/git-repo" class="external-link"
rel="nofollow">https://gerrit.googlesource.com/git-repo</a>  
remote: Finding sources: 100% (32/32)  
remote: Total 32 (delta 14), reused 32 (delta 14)  
Unpacking objects: 100% (32/32), done.  
File "/mnt/home /cmf/.repo/repo/main.py", line 79  
file=sys.stderr)  
^  
SyntaxError: invalid syntax

If you're using an older system without Python 3.6+, try downloading an
older version of the Repo Launcher that still supports Python 2.7.

**Possible Solution :**

\# create a bin directory

mkdir ~/bin

export PATH=~/bin:$PATH

curl <a href="https://storage.googleapis.com/git-repo-downloads/repo-1"
class="external-link"
rel="nofollow">https://storage.googleapis.com/git-repo-downloads/repo-1</a>
&gt; ~/bin/repo

chmod a+x ~/bin/repo

------------------------------------------------------------------------

------------------------------------------------------------------------

  

<u>***How to solve Issue due to do\_fetch error?***</u>

    ERROR: trower-base64-git+AUTOINC+fbb9440ae2-r0 do_fetch: Fetcher failure: Unable to find revision fbb9440ae2bc1118866baefcea7ff814f16613dd in branch master even from upstream

    ERROR: trower-base64-git+AUTOINC+fbb9440ae2-r0 do_fetch: Fetcher failure for URL: 'git://github.com/Comcast/trower-base64.git'. Unable to fetch URL from any source.

    ERROR: trower-base64-git+AUTOINC+fbb9440ae2-r0 do_fetch: Function failed: base_do_fetch

    ERROR: Logfile of failure stored in: /builds/__repo/build-brcm968360GW/tmp/work/cortexa7t2-vfp-rdk-linux-gnueabi/trower-base64/git+AUTOINC+fbb9440ae2-r0/temp/log.do_fetch.18310

    ERROR: Task (/builds/__repo/meta-rdk-ext/recipes-support/trower-base64/trower-base64_1.0.bb:do_fetch) failed with exit code '1

  
Few points to check here,

-   First check if the SRC\_URL can be accessed manually in browser

-   Check the path of the URL is proper and check the branch detail as
    well

For example, above error can be fixed by appending **branch=main** in
the SRC\_URL path

  

------------------------------------------------------------------------

## <span class="plugin_pagetree_children_span" style="color: rgb(51,102,255);">Where to Find</span>

<u>RDK Home :</u>

-   [RDK Central
    Wiki](https://wiki.rdkcentral.com/display/RDK/RDK+Central+Wiki)

<u>Developer Portal Home:</u>

-   <a href="https://developer.rdkcentral.com/" class="external-link"
    rel="nofollow">https://developer.rdkcentral.com/</a>

<u>RDK-V :</u>

-   <a
    href="https://developer.rdkcentral.com/documentation/documentation/rdk_video_documentation/"
    class="external-link" rel="nofollow">RDK Video Documentation</a>
-   <a
    href="https://developer.rdkcentral.com/documentation/documentation/rdk_video_documentation/rdk-v_features/"
    class="external-link" rel="nofollow">RDK-V Features</a>
-   <span class="nolink"><a
    href="https://devices.rdkcentral.com/devices/rdk-_v/hardware_porting_guide/index.html"
    class="external-link" rel="nofollow">RDK-V Porting Guide</a></span>
-   <span class="nolink"><a
    href="https://rdktools.rdkcentral.com/tools__certification/raspberry_pi/index.html"
    class="external-link" rel="nofollow">Raspberry Pi</a></span>
    -   <a href="https://wiki.rdkcentral.com/display/RDK/RDK-V+R-Pi+Build+Guide"
        rel="nofollow">RDK-V Raspberry Pi Build Guide</a>
-   <a
    href="https://rdktools.rdkcentral.com/tools__certification/rdk_emulator/index.html"
    class="external-link" rel="nofollow">Emulator</a>
    -   <a
        href="https://wiki.rdkcentral.com/display/RDK/RDK-V+Emulator+Build+Guide"
        rel="nofollow">RDK-V Emulator Build Guide</a>

  

<u>RDK-B :</u>

-   <a
    href="https://developer.rdkcentral.com/documentation/documentation/rdk_broadband_documentation/"
    class="external-link" rel="nofollow">RDK Broadband Documentation</a>
-   <a
    href="https://developer.rdkcentral.com/documentation/documentation/rdk_broadband_documentation/rdk-b_features/"
    class="external-link" rel="nofollow">RDK-B Features</a>
-   <a href="https://wiki.rdkcentral.com/display/RDK/RDK-B+Porting+Guide"
    rel="nofollow">RDK-B Porting Guide</a>
    -   <a href="https://devices.rdkcentral.com/devices/rdk-_b/index.html"
        class="external-link" rel="nofollow">Porting guide</a>
-   <span class="nolink"><a
    href="https://rdktools.rdkcentral.com/tools__certification/raspberry_pi/index.html"
    class="external-link" rel="nofollow">Raspberry Pi</a></span>
    -   <a href="https://wiki.rdkcentral.com/display/RDK/RDK-B+R-Pi+Build+guide"
        rel="nofollow">RDK-B Raspberry pi Build guide</a>
-   <a
    href="https://rdktools.rdkcentral.com/tools__certification/turris_omnia/index.html"
    class="external-link" rel="nofollow">Turris</a>
    -   <a href="https://wiki.rdkcentral.com/display/RDK/RDK-B+Turris"
        rel="nofollow">RDK-B Turris Omnia</a>
-   <a
    href="https://rdktools.rdkcentral.com/tools__certification/rdk_emulator/index.html"
    class="external-link" rel="nofollow">Emulator</a>
    -   <a
        href="https://wiki.rdkcentral.com/display/RDK/RDK-B+Emulator+Build+Guide"
        rel="nofollow">RDK-B Emulator Build Guide</a>

<u>RDK Reference Platform :</u>

-   [RDK Reference
    Platform](https://wiki.rdkcentral.com/display/RDK/RDK+Reference+Platform)
-   <a href="https://wiki.rdkcentral.com/display/RDK/RDK-B"
    rel="nofollow">RDK-B Reference Platform</a>
    -   <a href="https://wiki.rdkcentral.com/display/RDK/RDK-B+Emulator"
        rel="nofollow">RDK-B Emulator</a>
    -   <a href="https://wiki.rdkcentral.com/display/RDK/RDK-B+Raspberry+Pi"
        rel="nofollow">RDK-B Raspberry Pi</a>
    -   <a href="https://wiki.rdkcentral.com/display/RDK/RDK-B+Turris"
        rel="nofollow">RDK-B Turris</a>
-   <a href="https://wiki.rdkcentral.com/display/RDK/RDK-V"
    rel="nofollow">RDK-V Reference Platform</a>
    -   <a href="https://wiki.rdkcentral.com/display/RDK/RDK-V+Emulator"
        rel="nofollow">RDK-V Emulator</a>
    -   <a href="https://wiki.rdkcentral.com/display/RDK/RDK-V+Raspberry+Pi"
        rel="nofollow">RDK-V Raspberry Pi</a>
-   <a href="https://wiki.rdkcentral.com/display/RDK/RDK-C"
    rel="nofollow">RDK-C Reference Platform</a>
    -   <a href="https://wiki.rdkcentral.com/display/RDK/RDK-C+Raspberry+Pi"
        rel="nofollow">RDK-C Raspberry Pi</a>
        -   <a href="https://wiki.rdkcentral.com/display/RDK/RDK-C+R-Pi+Build+guide"
            rel="nofollow">RDK-C Raspberry Pi Build guide</a>

  

<u>RDK Accelerator :</u>

-   [RDK Accelerator Home
    Page](https://wiki.rdkcentral.com/display/RDK/RDK+Accelerator+Home+Page)
-   <a href="https://wiki.rdkcentral.com/display/RDK/Product+Specifications"
    rel="nofollow">Product Specifications</a>
-   <a
    href="https://wiki.rdkcentral.com/display/TDK/RDK+Video+Accelerator+Certification"
    rel="nofollow">RDK Video Accelerator Certification</a>
-   <a href="https://wiki.rdkcentral.com/display/RDK/Getting+Started+-+OEM"
    rel="nofollow">Getting Started - OEM</a>
-   <a href="https://wiki.rdkcentral.com/display/RDK/Getting+Started+-+SoC"
    rel="nofollow">Getting Started - SoC</a>
-   <a href="https://wiki.rdkcentral.com/display/RDK/Getting+Started+-+MSO"
    rel="nofollow">Getting Started - MSO</a>

  

<u>RDK Device Management :</u>

-   <a
    href="https://developer.rdkcentral.com/documentation/documentation/device_management/"
    class="external-link" rel="nofollow">RDK Device Management</a>
    -   <a
        href="https://developer.rdkcentral.com/documentation/documentation/device_management/telemetry/"
        class="external-link" rel="nofollow">Telemetry</a>
    -   <a
        href="https://developer.rdkcentral.com/documentation/documentation/device_management/telemetry_2/"
        class="external-link" rel="nofollow">Telemetry 2.0: Report Profiles</a>
    -   <a
        href="https://developer.rdkcentral.com/documentation/documentation/device_management/log_upload/"
        class="external-link" rel="nofollow">LogUpload in RPI (RDK-V) using
        XConf Simulator</a>

<u>WEBINARS Home :</u>

-   [WEBINARS
    Home](https://wiki.rdkcentral.com/display/WEBINARS/WEBINARS+Home)

-   [RDK Videos](https://wiki.rdkcentral.com/display/RDK/RDK+Videos)

  

<u>Test Development Kit (TDK) :</u>

-   [Test Development Kit (TDK)
    Home](https://wiki.rdkcentral.com/display/TDK/Test+Development+Kit+%28TDK%29+Home)
    -   <a href="https://wiki.rdkcentral.com/display/TDK/TDK-V+Documentation"
        rel="nofollow">TDK-V Documentation</a>

    -   <a href="https://wiki.rdkcentral.com/display/TDK/TDK-B+Documentation"
        rel="nofollow">TDK-B Documentation</a>

    -   <a href="https://wiki.rdkcentral.com/display/TDK/TDK-C+Documentation"
        rel="nofollow">TDK-C Documentation</a>
-   <a
    href="https://wiki.rdkcentral.com/display/TDK/RDK+Video+Certification"
    rel="nofollow">RDK Video Certification</a>
-   <a
    href="https://wiki.rdkcentral.com/display/TDK/TDK-V+Porting+on+RaspberryPi"
    rel="nofollow">TDK-V Porting on Raspberry Pi</a>
-   <a href="https://wiki.rdkcentral.com/display/TDK/TDK+FAQ+Document"
    rel="nofollow">TDK FAQ Document</a>

  

<u>Release details:</u>

-   [RDK Releases](https://wiki.rdkcentral.com/display/CMF/RDK+Releases)
    -   <a href="https://wiki.rdkcentral.com/display/CMF/Code+Releases"
        style="text-decoration: none;" rel="nofollow">RDK-B Releases</a>
    -   <a href="https://wiki.rdkcentral.com/display/CMF/RDK-V+Releases"
        style="text-decoration: none;" rel="nofollow">RDK-V Releases</a>
    -   <a href="https://wiki.rdkcentral.com/display/CMF/RDK-C+Releases"
        style="text-decoration: underline;" rel="nofollow">RDK-C Releases</a>
-   [Reference Platform
    Releases](https://wiki.rdkcentral.com/display/RDK/Reference+Platform+Releases)

------------------------------------------------------------------------

## <span style="color: rgb(51,102,255);">Reference Platform</span>

<u>***<span style="color: rgb(60,79,84);">Why the command dmcli eRT getv
datamodel is failing in emulator?</span>***</u>

The dmcli command for emulator platform use simu instead of eRT and this
is the reason for failing in emulator.

A sample command is :

***dmcli simu getv Device.***

------------------------------------------------------------------------

------------------------------------------------------------------------

### **RDK-B**

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">We see in the list of
supported features in RDK-B Reference Platform: so, without WPS how will
the devices connect over WiFi to a Raspberry Pi running RDK-B reference
platform?</span>***</u>

<span style="color: rgb(60,79,84);">The devices can connect over wifi to
Raspberrypi by knowing the SSID and the corresponding password of the
RaspberryPi Wifi network, which will be WPA2-PSK protected.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

#### **Emulator**

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Is it possible to get
pre-built RDK-B emulator image to run on VirtualBox?</span>***</u>

<span style="color: rgb(60,79,84);">As of now, RDKM is not providing a
ready-to-use pre-built image for emulator. But you can easily create an
emulator build in an Ubuntu linux machine by following the instructions
given at <a
href="https://wiki.rdkcentral.com/display/RDK/RDK-B+Emulator+Build+Guide"
rel="nofollow">https://wiki.rdkcentral.com/display/RDK/RDK-B+Emulator+Build+Guide</a> </span>

------------------------------------------------------------------------

------------------------------------------------------------------------

#### **Turris Omnia**

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How to upgrade/downgrade
u-boot in Turris Omnia?</span>***</u>

<span style="color: rgb(60,79,84);">mkdir tmp/;  
cd tmp/  
wget <a
href="https://repo.turris.cz/hbl/omnia/packages/turrispackages/u-boot-omnia_2019-07-7_arm_cortex-a9_vfpv3.ipk"
class="external-link" style="text-decoration: none;text-align: left;"
rel="nofollow">https://repo.turris.cz/hbl/omnia/packages/turrispackages/u-boot-omnia_2019-07-7_arm_cortex-a9_vfpv3.ipk</a>  
tar xf u-boot-omnia\_2019-07-7\_arm\_cortex-a9\_vfpv3.ipk  
tar xf data.tar.gz  
cd usr/share/omnia/  
flash\_eraseall /dev/mtd0  
nandwrite /dev/mtd0 uboot-devel  
cd ../../../..  
rm -rf tmp</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How to upgrade/downgrade
rescue image in Turris Omnia?</span>***</u>

<span style="color: rgb(60,79,84);">mkdir tmp; cd tmp/  
wget <a
href="https://repo.turris.cz/hbl/omnia/packages/turrispackages/rescue-image_3.2-1_arm_cortex-a9_vfpv3.ipk"
class="external-link" style="text-decoration: none;text-align: left;"
rel="nofollow">https://repo.turris.cz/hbl/omnia/packages/turrispackages/rescue-image_3.2-1_arm_cortex-a9_vfpv3.ipk</a>  
tar xf rescue-image\_3.2-1\_arm\_cortex-a9\_vfpv3.ipk  
tar xf data.tar.gz  
cd usr/share/rescue-image/  
flash\_eraseall /dev/mtd1  
nandwrite /dev/mtd1 image.fit.lzma  
cd ../../../..  
rm -rf tmp</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How to resolve “Bad Linux ARM
zImage magic!” when installing medkit image?</span>***</u>

<span style="color: rgb(60,79,84);">When we pass Legacy zImage(kernel)
image with newer model of turris Omnia we get this error. We need to
provide FIT rescue image for newer model of Turris Omnia</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How to recover from corrupted
RDKB image and flash new image with OpenWRT (Older model of Turris Omnia
has failsafe OS)?</span>***</u>

Go into u-boot prompt and get back to OpenWRT (failsafe) OS  
=&gt;env set yocto\_mmcload false  
=&gt;saveenv  
=&gt;reset

Format /dev/mmcblk0p3 and /dev/mmcblk0p5 and new RDKB firmware into p3
and p5 partitions  
To get back to RDKB image  
=&gt;env set yocto\_mmcload setenv bootargs “$yocto\_bootargs
cfg80211.freg=$regdomain”; ext2load mmc 0:3 0x01000000 zImage; ext2load
mmc 0:3 0x02000000 armada-385-turris-omnia.dtb  
=&gt;saveenv  
=&gt;reset

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How to recover from corrupted
RDKB image and flash new image without OpenWRT(Newer model of Turris
omnia)?</span>***</u>

<span style="color: rgb(60,79,84);">Follow “Flashing with Medkit &
Sysupgrade images” section in <a
href="https://34.214.27.93/broadband/platforms/turris/turris_omnia_reference_platform_flashing_instruction/turris_omnia_2019__2020_flashing_instruction"
class="external-link" rel="nofollow"
style="text-decoration: none;text-align: left;">https://wiki.rdkcentral.com/pages/viewpage.action?pageId=114986683</a></span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">What are different Image
formats?</span>***</u>

<span style="color: rgb(60,79,84);">Legacy and FIT image</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How firmware upgrade works for
Turris Omnia?</span>***</u>

<span style="color: rgb(60,79,84);">TurrisFwUpgrade.sh is written with
two models in mind(older and newer)Older model has this partitions in
internal flash  
mmcblk0p1 – openwrt bootfs  
mmcblk0p2 – openwrt rootfs  
mmcblk0p3 – rdk bootfs  
mmcblk0p4 – Extended partition  
mmcblk0p5- rdk rootfs(1)  
mmcblk0p6 – nvram  
mmcblk0p7 – rdk rootfs(2) for firmware upgradeNewer model has this
partitions in internal flash  
mmcblk0p1 – rdk bootfs  
mmcblk0p2 – rdk rootfs(1)  
mmcblk0p3 – rdk rootfs(2) for firmware upgrade  
mmcblk0p4 – Extended partition  
mmcblk0p5 – nvramThis TurrisFwUpgrade.sh script will fill new rootfs in
alternate partition swap the rootfs partition and copy zImage (in
bootfs) in internal flash memory.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

### **RDK-Camera**

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How to change resolution to
capture data from camera?</span>***</u>

<span style="color: rgb(60,79,84);">We can change the resolution in
rms.conf file that is there in /ust/local/rms/bin/ directory.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Have you used any cloud server
to store 24\*7 buffer for CVR?</span>***</u>

<span style="color: rgb(60,79,84);">Yes, we have used AWS server to
store 24\*7 data for CVR.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How to Capture data from
camera?</span>***</u>

<span style="color: rgb(60,79,84);">Use gstreamer plugin mainly, v4l2src
plugin to capture data from camera.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Why it is not possible to
access webpage to view the live streaming content to check RMS
feature?</span>***</u>

<span style="color: rgb(60,79,84);">AS of now we used confidential page
to check this feature,we are trying to support google based signalling
server to resolve this conflict.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Which “Encoded” format
supported for RMS liver streaming and CVR?</span>***</u>

<span style="color: rgb(60,79,84);">h264 encoded format is supported for
RMS live streaming and Continuous video recording(CVR).</span>

  

  

------------------------------------------------------------------------

## RDK-V

<u>***<span style="color: rgb(60,79,84);">Does the RDK license cover the
Digital Living Network Alliance (DLNA)?</span>***</u>

<span style="color: rgb(60,79,84);">No. An organization must be a member
of the <a href="http://www.dlna.org/" class="external-link"
style="text-decoration: none;text-align: left;" rel="nofollow">Digital
Living Network Alliance</a> to obtain a DLNA license.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">As there is no Digital Media
Server in RDK, which module provides content for DLNA?</span>***</u>

<span style="color: rgb(60,79,84);">Media-streamer module provides
content for DLNA. The implementation is a part of the media-streamer
component, and is implemented on top of the libgupnp code.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Do the RDK Servers run with
DLNA link protection?</span>***</u>

<span style="color: rgb(60,79,84);">Yes</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How do I download old versions
of rdkv-xxxxqx?</span>***</u>

Use below command format –

-   <span style="color: rgb(60,79,84);">repo init
    -u <a href="https://code.rdkcentral.com/r/manifests" class="external-link"
    style="text-decoration: none;"
    rel="nofollow">https://code.rdkcentral.com/r/manifests</a>-m
    rdkv.xml -b rdkv-20200207                    </span>

(The quarterly release name can be given with -b option)

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">how to add event listeners and
subscribe the available events in dash.js?</span>***</u>

It is possible to consume mediaplayer events in
Lightning <span style="text-decoration: none;"
rel="nofollow">-http://cdn.dashjs.org/latest/jsdoc/streaming\_MediaPlayerEvents.js.html</span>

Example:

const events = \[“playbackStateChanged”, “playbackCompleted”,
“playbackSpeedChanged”,

“playbackFailed”, “mediaMetadata”, “timedMetadata”,
“playbackProgressUpdate”,

 “playbackStarted”, “bufferingChanged”, “durationChanged”,
“decoderAvailable” \];

events.forEach(event =&gt; {

 player.addEventListener(event, (e) =&gt; {

 this.fire(event, {event: e});

});            

});

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">In which scenarios an
application need to use service manager API if IARM Bus interface is
already available?</span>***</u>

IARM bus interface are used to get the events notification from the
system level like IR key, power, storage space, etc. could be better
used in native apps.

Servicemanager acts as a subscriber who will receive the events from
IARM Bus and post it to MSO Backend. The ServiceManager is the one well
known facility for cloud-based applications to gain access to device
vended functionality whether they are written in HTML 

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span class="expand-control-text" style="color: rgb(60,79,84);">If
one has to write a new Service for ServiceManager, would the base class
be Service, or AbstractService?</span>***</u>

<span class="expand-control-text"
style="color: rgb(60,79,84);"><span style="color: rgb(60,79,84);">The
better alternative is of course the “AbstractService” class as it is the
newer version and derived from the “Service” class and has a superset of
features of the service class. However, pure virtual functions may be
useful for enforcing OOPS convention of data hiding and
abstraction.</span></span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How to add new parameters to
TR069 data model? Which files needs to be modified in order to “see” the
parameters on the emulator?</span>***</u>

<span style="color: rgb(60,79,84);">First modify the config/xml file
which will be there in the component you are writing objects and then
respective handlers you have to call in xml.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Does WPE support Web
Assembly?</span>***</u>

-   <span style="color: rgb(60,79,84);">WPE doesn’t support
    WebAssembly.</span>
-   <span style="color: rgb(60,79,84);">It wont be faster for general
    use cases and memory management is worse since it’s a fixed heap
    without garbage collection.</span>
-   <span style="color: rgb(60,79,84);">Web assembly is interesting but
    currently they’re targeting big monolithic codebases in c++ etc like
    games but more on desktop memory profiles. All the feedback we got
    thus far has told us their experience hasn’t been a win on perf or
    memory</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Does Comcast support
canPlayType() for determining codec support?</span>***</u>

<span style="color: rgb(60,79,84);">WPE WebKit has limited support
for HTMLMediaElement.canPlayType() and MediaSource.isTypeSupported(). It
implements checks for container, video width/height/framerate, and basic
verification of codec (it doesn’t check for profile & level)</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">DASH.js has a problem with
sending license requests to a playready server,Why?</span>***</u>

<span style="color: rgb(60,79,84);">Make sure DASH.js uses utf-8 as a
content type format for license requests (playready challenge is utf-8
encoded)</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Does media element would
support directly playing HLS and/or DASH, if so can we avoid using
Google’s Shaka if wanted?</span>***</u>

-   <span style="color: rgb(60,79,84);">Yes, WPE media element:
    “aamp://” schema WPE AAMP: UVE
    API <a href="https://firebolt.app/aamp/UVE/index.html" class="external-link"
    style="text-decoration: none;" rel="nofollow">&lt;span style=”color:
    #0000ff”&gt;&lt;a href=”https://firebolt.app/aamp/UVE/index.html”
    class=”external-link”
    rel=”nofollow”&gt;https://firebolt.app/aamp/UVE/index.html+&lt;/a&gt;&lt;/span&gt;</a> 
     </span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Is there any native rendering
of subtitles like 608/708, SRT, WebVTT, TTML, etc? Can we add or select
subtitle tracks via the media element. Is there limitations based on
protocol or media container (HLS, DASH, MP4, MKV)?</span>***</u>

-   <span style="color: rgb(60,79,84);">WPE: no native subtitles support
    (608/708 could be integrated from main UI application) </span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Can we select the audio track
to use via the media element? Often media can have multiple audio tracks
in different languages and/or commentary?</span>***</u>

<span style="color: rgb(60,79,84);">WPE media element: no audio track
selection;  WPE MSE Google Shaka: selectAudioLanguage(language, role),
or selectVariantTrack(track);   WPE AAMP UVE: set</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How to open a website that
requires MoneyBadger in Chrome?</span>***</u>

<span style="color: rgb(60,79,84);">Inject the following JS code to
handle MoneyBadger requests (some)  
window.ServiceManager = {};  
     window.ServiceManager.version = ‘2.0’;  
     window.ServiceManager.getServiceForJavaScript = function(name,
serviceReadyCb) {  
         class BridgeObject  
         {  
             JSMessageChanged(msgStr)  
             {  
                 let msg = JSON.parse(msgStr);  
                 console.log(‘badger action=’, msg.action, ‘pid=’,
msg.pid);  
                 if (msg.action === ‘deviceCapabilities’ || msg.action
=== ‘info’) {  
                     setTimeout((msg) =&gt; {  
                         let caps = {  
                             videoDimensions: \[3840, 2160\],  
                             hdr: { settopHdrSupport: ‘DolbyVision’,
tvHdrSupport: ‘DolbyVision’ },  
                             hdcp: { connected: true,
currentHDCPVersion: ‘2.2’ }  
                         }  
                         window.$badger.callback(msg.pid, true, caps)  
                     }, 0, msg);  
                 } else {  
                     window.$badger.callback(msg.pid, false, {})  
                 }  
                 return true  
             }  
         }  
         if (name === ‘com.comcast.BridgeObject\_1’)  
             serviceReadyCb(new BridgeObject);  
     }</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">HTTPS: What TLS versions and
which ciphers are supported by rdkbrowser2 / WPE?</span>***</u>

<span style="color: rgb(60,79,84);"> Open <a href="https://www.ssllabs.com/ssltest/viewMyClient.html"
class="external-link" style="text-decoration: none;text-align: left;"
rel="nofollow">&lt;span style=”color: #0000ff”&gt;<span>&lt;a
href=”https://www.ssllabs.com/ssltest/viewMyClient.html</span>”
class=”external-link”
rel=”nofollow”&gt;https://www.ssllabs.com/ssltest/viewMyClient.html+&lt;/a&gt;&lt;/span&gt;</a> on
box to get a report of supported TLS versions and ciphers</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Is it possible to use a remote
control with rdkbrowser2.sh?</span>***</u>

Yes**, **it is possible to use a remote control with rdkbrowser2.sh

** ***touch /opt/remote\_input\_enable  *and reboot.

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Is local storage feature
available in WPE Browser?</span>***</u>

<span style="color: rgb(60,79,84);">By default local storage is
disabled. If the app requires this support, you need to contact Project
management to enable it for the specific app.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">With regards to crashupload is
there a feature to prevent the deletion of the corefiles from the box,
which is useful during development and integration?</span>***</u>

You can modify the script to avoid the deletion of older files:

<a
href="https://code.rdkcentral.com/r/plugins/gitiles/rdk/components/generic/crashupload/+/refs/heads/rdk-next/uploadDumps.sh#321"
class="external-link" style="text-decoration: none;"
rel="nofollow">https://code.rdkcentral.com/r/plugins/gitiles/rdk/components/generic/crashupload/+/refs/heads/rdk-next/uploadDumps.sh#321</a>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How is the Turner Reservation
Manager (TRM) used to allocate a tuner to a QAM source?</span>***</u>

Client requests a tuner through URL(http,live), TRM server receives the
request and checks for the valid reservation and reserves the tuner so
that the client is provided with the service requested. Client also can
extend or delete the reservation. It is also possible for a client to
request a list of the active reservations.

For more details, Please
refer <a href="https://wiki.rdkcentral.com/display/RDK/TRM#TRM-HowTRMworks"
style="text-decoration: none;"
rel="nofollow">https://wiki.rdkcentral.com/display/RDK/TRM#TRM-HowTRMworks</a>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>**<span style="color: rgb(60,79,84);">To get CPE/RF MAC address of
the STB, is there an API or standard RDK way to obtain this that will
not be hardware specific?</span>**</u>

<span style="color: rgb(60,79,84);">getDeviceInfo() – Retrives the
device information of the device .  
To get a mac address getDeviceInfo() needs to be called with string
“getMacAddress” as an argument like getDeviceInfo(“macAddress”)</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

*<u>**<span style="color: rgb(60,79,84);">Does RDK have support for Fast
Channel Change?</span>**</u>*

<span style="color: rgb(60,79,84);">Yes , Please refer this link
: <a href="https://wiki.rdkcentral.com/display/RDK/Session+Manager"
rel="nofollow">Session Manager</a></span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span class="expand-control-text"
style="color: rgb(60,79,84);">Does user need to sign any special license
or pay a fee to use Amazon Alexa voice Integration service if he/she has
Alexa Echo Dot configured in their home Wifi?</span>***</u>

<span class="expand-control-text"
style="color: rgb(60,79,84);">NO</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How scalable and secure is the
current solution- RDK Alexa Echo Dot Voice Application?</span>***</u>

<span style="color: rgb(60,79,84);">End state architecture has
scalability and security built into it.Refer <a
href="https://wiki.rdkcentral.com/pages/viewpage.action?pageId=90117530#ReferenceRDKAlexaEchoDotVoiceApplication(InProgress)"
style="text-decoration: none;text-align: left;" rel="nofollow">RDK Alexa
Echo Dot Voice Application</a> </span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Is there any example for
gstreamer to enc/dec media file?</span>***</u>

This is a sample pipeline to play dtcp encrypted content using
gst-launch

gst-launch-1.0 httpsrc location=”<a
href="http://127.0.0.1:8080/hnStreamStart?live=ocap://0x2c23&amp;continueTSB=true"
class="external-link" style="text-decoration: none;"
rel="nofollow">http://127.0.0.1:8080/hnStreamStart?live=ocap://0x2c23&amp;continueTSB=true</a>”
blocksize=131072 ! dtcpdec dtcp-src-ip=”127.0.0.1″ dtcp-port=5000
buffersize=131072 ! playersinkbin is-live=true.

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Where to find the include
header files of a component?</span>***</u>

-   <span style="color: rgb(60,79,84);">All include header files of a
    component are present
    in <a href="https://code.rdkcentral.com/" class="external-link"
    style="text-decoration: none;"
    rel="nofollow">https://code.rdkcentral.com</a>.</span>
-   <span style="color: rgb(60,79,84);">After login
    into <a href="https://code.rdkcentral.com/" class="external-link"
    style="text-decoration: none;"
    rel="nofollow">https://code.rdkcentral.com</a> search for the
    respective component and go to the component repo which shows all
    the corresponding files.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How to get the crash dump for
box reboot?</span>***</u>

-   <span style="color: rgb(60,79,84);">The coredump files will be
    available in following directory for a systemd based box –
    /var/lib/systemd/coredump/</span>
-   <span style="color: rgb(60,79,84);">Additionally for system logs,
    you can browse through following files in /opt/logs –</span>
    1.  <span style="color: rgb(60,79,84);">core\_log.txt</span>

    2.  <span style="color: rgb(60,79,84);">rebootInfo.log</span>

    3.  <span style="color: rgb(60,79,84);">messages.txt</span>
-   <span style="color: rgb(60,79,84);">Previous boot Logs can be also
    seen from  /opt/logs/PreviousLogs/</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">OPKG shows me only the
packages already installed and is unable to update them. What tool can I
use to install packages?</span>***</u>

<span style="color: rgb(60,79,84);">There is no package manager support
for downloading/installing packages. However you can manually install
ipk packages.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Wondered if there was a screen
resolution setting to force the rdk hardware to a given
resolution?</span>***</u>

RDK Device Settings is the component which handles the following
configurations:

-   <span style="color: rgb(60,79,84);">Audio Output Ports (Volume,
    Mute, etc.)</span>
-   <span style="color: rgb(60,79,84);">Video Ouptut Ports (Resolutions,
    Aspect Ratio, etc.)</span>
-   <span style="color: rgb(60,79,84);">Front Panel Indicators</span>
-   <span style="color: rgb(60,79,84);">Zoom Settings</span>
-   <span style="color: rgb(60,79,84);">Display (Aspect Ratio, EDID data
    etc.)</span>
-   <span style="color: rgb(60,79,84);">General Host configuration
    (Power managements, event management etc.)</span>

These properties are persisted in the STB and are read/applied on each
boot-up.

For example: On a RDK emulator, the device setting properties are
persisted in ‘/opt/persistent/ds/hostData’ .

There are few sample applications available to test/force the settings
e.g. setResolution can be used to force the resolution settings.

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">What are the logging
requirements for the Comcast RDK?</span>***</u>

<span style="color: rgb(60,79,84);">The Comcast RDK requires kernel
logs, DOCSIS ECM logs, and syslog messages to be logged into specific
files. These details can be provided by Comcast on request. The RDK
set-top diagnostics and troubleshooting infrastructure requires these
logs to be present and accessible via the ESTB interface to aid in the
rapid troubleshooting of the device during development and
deployment.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Can you clarify the
partitioning scheme and other requirements for on-board flash memory and
disk drives?</span>***</u>

Flash and hard disk drive (HDD) requirements for RDK devices will differ
depending on the deployment configuration. For example, a DVR will have
an HDD but some other devices will not.

Flash is used to store the advanced bootloader (ABL), primary and
secondary firmware images, serialization data, and other data that need
to persist, including logs. Where possible on HDD devices, the HDD is
leveraged to store dynamic content leaving flash on those devices to be
primarily read-only. The partitioning scheme for on-board flash and HDD
will therefore differ depending on the physical makeup of the device.  

Please contact Comcast for more information.

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Do libcrypto, openSSL and
libpgp need to follow robustness rules in their implementation, as with
DRM? Or are they just ported as is on the platform? Do they need to be
optimized in hardware?</span>***</u>

libcrypto, openSSL and libpgp can be ported as it is. However the SoC
security APIs need to be implemented to support Comcast security
requirements.

There are no requirements for hardware optimization.

  

### **RDK-V UI**

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How to copy build/dist into
rpi from dev pc?</span>***</u>

-   <span style="color: rgb(60,79,84);">Connect your device with lan and
    get the box/device ip, make sure your dev pc and device is connected
    with the same network, so that you will be able to access your
    device from dev pc.</span>
-   <span style="color: rgb(60,79,84);">From dev pc: $ scp -r &lt;dist
    or build folder which contains index.html, appBundle.js and other
    files&gt; root@&lt;your
    box/device <a href="http://ip/home/root" class="external-link"
    style="text-decoration: none;" rel="nofollow">ip:/home/root</a>&gt;</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Where to find residentapp.sh
file to configure resident App or offline app?</span>***</u>

-   <span style="color: rgb(60,79,84);">Login into box: $ ssh
    root@&lt;your box ip&gt;</span>
-   <span style="color: rgb(60,79,84);">Go to dir: $ cd /lib/rdk</span>
-   <span style="color: rgb(60,79,84);">Edit residentApp.sh: $ vi
    residentApp.sh  
    </span>
-   <span style="color: rgb(60,79,84);">You will see Residentapp =
    “</span><a
    href="https://rdkwiki.com/rdk-apps/accelerator-home-ui/index.html#splash"
    class="external-link" style="text-decoration: none;"
    rel="nofollow"><span
    style="color: rgb(60,79,84);">https://rdkwiki.com/rdk-apps/accelerator-home-ui/index.html#splash</span></a><span style="color: rgb(60,79,84);">” </span><span style="color: rgb(60,79,84);">and </span><span style="color: rgb(60,79,84);">offlineApp=”</span><a href="http://127.0.0.1:50050/lxresui/index.html"
    class="external-link" style="text-decoration: none;"
    rel="nofollow"><span
    style="color: rgb(60,79,84);">http://127.0.0.1:50050/lxresui/index.html</span></a><span style="color: rgb(60,79,84);">“</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">ThunderUI, How to resolve
concurrently ‘npm run watch’ ‘npm run serve’ issue in windows
8/10?</span>***</u>

<span style="color: rgb(60,79,84);">Execute $ npm run watch and then npm
run serve separately in separate terminal.(tried on VS code)</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">ThunderUI, How to resolve
‘NODE\_ENV’ is not recognized as an internal or external command
operable program or batch file. while executing npm run
build?</span>***</u>

For this,Install windows node env globally:

$ npm install -g win-node-env

  

------------------------------------------------------------------------

## RDK-B

**<u>*<span style="color: rgb(0,51,102);">After building the full
Raspberry Pi image, the rootfs doesn't seem to contain libpcap. So,
although the rootfs of emulator build does contain it. Any specific
reason for such difference?</span>*</u>**

-   <span style="color: rgb(0,0,0);">The rootfs doesn't
    contain <a href="http://libpcap.so/" class="external-link"
    rel="nofollow">libpcap.so</a>, as tcpdump utility is not appended in
    the packagegroup-rdk-oss-broadband.bbappend file in the Raspberry-pi
    build whereas you can find the tcpdump utility appended for the
    corresponding file for Emulator build.</span>
-   <span style="color: rgb(0,0,0);">So, if we include tcpdump utility
    in the above mentioned file, libpcap. So file will be present in the
    rootfs of the raspberry-pi build.</span>
-   <span style="color: rgb(0,0,0);">See below output from the
    raspberry-pi device after adding tcpdump -</span>

<span style="color: rgb(0,0,0);">root@RaspberryPi-Gateway:/# find .
-iname libpcap\*
./usr/lib/<a href="http://libpcap.so/" class="external-link"
rel="nofollow">libpcap.so</a>.1.7.4
./usr/lib/<a href="http://libpcap.so/" class="external-link"
rel="nofollow">libpcap.so</a>.1</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

***<u><span style="color: rgb(0,0,0);"> Is it possible to just download
the pre built image of RDK-B that can be loaded onto an SD card without
having to build it?</span></u>***

-   Follow
    <a href="https://developer.rdkcentral.com/" class="external-link"
    rel="nofollow">https://developer.rdkcentral.com/preview-rdk/</a> for
    pre-built images.
-   Also you can built images by referring:
    -   <a href="https://rdktools.rdkcentral.com/index.html"
        class="external-link"
        rel="nofollow">https://rdktools.rdkcentral.com/index.html</a>
    -   [RDK Reference
        Platform](https://wiki.rdkcentral.com/display/RDK/RDK+Reference+Platform)

------------------------------------------------------------------------

------------------------------------------------------------------------

***<span style="color: rgb(0,51,102);text-decoration: underline;">Why
eRT subsystem fails on emulator?Is this because of the absence of
embedded router?</span>***

<span style="color: rgb(0,0,0);letter-spacing: 0.0px;">The eRT (embedded
router) subsystem is generally used to perform dmcli operations on
Raspberry pi which can function as a basic router. To perform dmcli
operations in emulator we use simu.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***What are the steps involved in compiling the Go Lang application?
Do you have yocto recipes for the same?***</u>

<span style="color: rgb(0,0,0);">We're simply building the application
using go build (without any Yocto recipes) as shown below -</span>

*<span style="color: rgb(0,0,0);">env CC=arm-linux-gnueabihf-gcc
LD=arm-linux-gnueabihf-ld GOOS=linux GOARCH=arm GOARM=7 CGO\_ENABLED=1
go build</span>*

------------------------------------------------------------------------

------------------------------------------------------------------------

***<u><span style="color: rgb(0,51,102);">Does RDK officially support GO
Lang compiled binaries? As the base of RDK seems to be linux, is it safe
to assume that, the GO compiled program binaries will run normally on
RDK-B? What are the steps involved in compiling the Go Lang
application?</span></u>***

-   <span style="color: rgb(0,0,0);">RDK officially doesn't support GO
    language compatibility. But you may always try GO binaries as most
    RDKM code bases are based on Yocto open-embedded builds and the
    binaries work out of the box.</span>
-   <span style="color: rgb(0,0,0);">You
    can </span><span style="color: rgb(0,0,0);">simply build the
    application using go build (without any Yocto recipes) as shown
    below -</span>
    -   *<span style="color: rgb(0,0,0);">env CC=arm-linux-gnueabihf-gcc
        LD=arm-linux-gnueabihf-ld GOOS=linux GOARCH=arm GOARM=7
        CGO\_ENABLED=1 go build</span>*

------------------------------------------------------------------------

------------------------------------------------------------------------

<span style="color: rgb(0,51,102);">***<u>Which types of data
models/namespace are available under the eCM subsystem like
"Device.WiFi." under eRT?</u>***</span>

-   Please refer to <a
    href="https://code.rdkcentral.com/r/plugins/gitiles/rdkb/components/opensource/ccsp/CcspWifiAgent/+/refs/heads/rdk-next/config-atom/TR181-WiFi-USGv2.XML"
    class="external-link"
    rel="nofollow">https://code.rdkcentral.com/r/plugins/gitiles/rdkb/components/opensource/ccsp/CcspWifiAgent/+/refs/heads/rdk-next/config-atom/TR181-WiFi-USGv2.XML</a>. 
    This gives objects, parameters list for WiFi along with functions
    call. T<span style="color: rgb(0,0,0);">he XML file
    (TR181-WiFi-USGv2.XML) </span><span style="color: rgb(23,43,77);"> file
    provides details regarding the data models available under
    Device.WiFi.</span>
-   . In older releases , the XML files are available under
    /usr/ccsp/&lt;component&gt; . But with the latest code, instead of
    reading and parsing the XML at runtime, the new approach includes
    conversion of XML to .C/.cpp with the help of XML2C and creating a
    shared library (<a href="http://libwi-fi.so/" class="external-link"
    rel="nofollow">libWi-Fi.so</a>). <span style="color: rgb(36,36,36);">These
    changes are done for rdkb to reduce image size and improve boot
    times.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

***<span style="color: rgb(0,51,102);text-decoration: underline;">Is
there any support for containers in RDK-B as of today?</span>***

<span style="color: rgb(0,51,102);"><span style="color: rgb(23,43,77);">Please
refer </span><a
href="https://wiki.rdkcentral.com/display/RDK/RDKB+Containerization+in+RPI+-+User+Manual+-+2019+M3"
rel="nofollow">https://wiki.rdkcentral.com/display/RDK/RDKB+Containerization+in+RPI+-+User+Manual+-+2019+M3</a><span style="color: rgb(23,43,77);"> .</span></span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<span style="color: rgb(0,0,0);"><u>***How to enable debug logs for a
component ?***</u></span>

<span style="letter-spacing: 0.0px;">Below are the two ways to enable
debug logs for component</span>

1.  adding prints in the respective place of code
2.  using rdkb logger(LogAgent) .  
    LoggerEnable - to enable/disable logs for particular component. If
    it is TRUE logs are enabled otherwise logs are disabled.  
    LogLevels - To set different log levels for each component. By
    default all modules log level is 4 (RDK\_LOG\_INFO).

------------------------------------------------------------------------

------------------------------------------------------------------------

***<span style="color: rgb(0,51,102);text-decoration: underline;">What
are the steps to run valgrind for ccsp components?</span>***

<span style="color: rgb(0,0,0);">The steps are –</span>

-   <span style="color: rgb(0,0,0);">Port valgrind to the platform (if
    not already available)</span>
-   <span style="color: rgb(0,0,0);">Compile the component with debug
    symbols enabled (i.e, avoid stripping the component
    executable/library. alternatively, you may replace the stripped
    binary with unstripped binary if it is not a read-only image)</span>
-   <span style="color: rgb(0,0,0);">Stop the service and start the
    binary as part of valgrind (just like we load any normal binary
    using valgrind)</span>
-   <span style="color: rgb(0,0,0);">Once you have enough data collected
    (or observed the issue you were trying to debug), you may stop it
    and examine the xml file for details.</span>

  

------------------------------------------------------------------------

------------------------------------------------------------------------

<span style="color: rgb(0,0,0);"><u>***Describe a way to get ipset on
RDK-B Emulator?***</u></span>

-   <span style="color: rgb(0,0,0);">ipset is available in real RDK-B
    devices( like the XB6 devices for example). To enable ipset for RDKB
    emulator, you can do that as the yocto recipes for ipset are already
    available at
    /meta-openembedded/meta-networking/recipes-extended/ipset/<a href="http://ipset_6.38.bb/" class="external-link"
    rel="nofollow">38.bb</a></span>
-   <span style="color: rgb(0,0,0);">You need to add the recipe to the
    package group for emulator to use it up during build time (you may
    add them
    in ./meta-rdk-bsp-emulator/recipes-core/packagegroups/packagegroup-rdk-ccsp-broadband.bbappend)</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

***<u><span style="color: rgb(0,0,0);">How to customize kernel modules
for RDK-B emulator?</span></u>***

<span style="color: rgb(0,0,0);">Follow the below steps to customize
kernel –</span>

-   <span style="color: rgb(0,0,0);">Need to Create config file within
    linux bb/bbappend file available directory</span>  
    <span style="color: rgb(0,0,0);">Path:
    meta-raspberrypi/recipes-kernel/linux/linux-raspberrypi</span>  
    <span style="color: rgb(0,0,0);">( XXX.cfg ) -
    Example:camera.cfg</span>
-   <span style="color: rgb(0,0,0);">Configuration parameter addition:
    Add config data to created config file so as to enable it. For
    example, add the below line to our camera.cfg file</span>  
    <span style="color: rgb(0,0,0);">CONFIG\_VIDEO\_BCM2835=y</span>
-   <span style="color: rgb(0,0,0);">Need to add created config file
    under SRC\_URI of linux bb/bbappend file mentioned in step
    1</span>  
    <span style="color: rgb(0,0,0);">SRC\_URI =
    "<a href="file://camera.cfg/" class="external-link"
    rel="nofollow">file://camera.cfg</a>"</span>
-   <span style="color: rgb(0,0,0);">Do compilation and
    Installation</span>  
    <span style="color: rgb(0,0,0);">bitbake "component-name" -c compile
    -f</span>  
    <span style="color: rgb(0,0,0);">bitbake "component-name" –f</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<span style="color: rgb(0,0,0);"><u>***Is there igmp\_snooper program in
RDK-B?***</u></span>

Yes, igmp\_snooper program is present in RDK-B .

-   <span style="color: rgb(0,0,0);">There is a shell script named
    "*service\_mcastsnooper.sh*"
    under */etc/utopia/service.d* directory, and in the script, it will
    execute "igmp\_snooper $sw\_opt $if\_opt $querier\_opt </span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<span style="color: rgb(0,0,0);"><u>***What are the possible solutions
available to manage RDK-B Data Model?***</u></span>

<span style="color: rgb(23,43,77);">The data model can be managed via
TR-069 , TR-181, management protocols like SNMP, WebUI, WEBPA .</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<span style="color: rgb(0,0,0);"><u>***How to know the Ccsp components
reside in which subsystems? {e-x, Device.WiFi. falls under eRT
subsystem. likewise for eCM subsystem)***</u></span>

-   <span style="color: rgb(0,0,0);">The eCM and eRT subsystems will
    always coexists in a **DOCSIS based WAN frontend gateway
    devices**. Any request for eCM parameters will be routed to eCM
    Message Bus Adapter component which uses **SNMP or other
    protocols **to talk to the cable modem firmware in the
    backend.</span>
-   <span style="color: rgb(0,0,0);">In Rpi, we have only eRT and in
    emulator we have simu.</span>
-   <span style="color: rgb(0,0,0);">eCM is applicable only to DOCSIS
    based devices , which uses SNMP based OIDs.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<span style="color: rgb(0,51,102);">***<u>What is the minimum rdkb
hardware requirement and functionalities supported by minimum
requirement ?</u>***</span>

Minimum Hardware requirement :

-   A Raspberry Pi 3B with the below configuration can be an ideal
    minimum requirement to support most of the functionalities for
    RDK-B.
-   The configuration of RPi 3B is CPU: Quadcore 1.2 GHz Broadcom
    BCM2837 64bit with 1GB RAM.
-   R-Pi 3B would be sufficient for the basic wireless functionality
    using 2.4GHz. In case of 5 GHz band support R-Pi 3B+ would be good
    (Note : R-Pi 3B+ doesn’t support simultaneous dual band operations).
-   Flash: The minimum size is around 285 MB. Anything above this should
    work just fine for loading/storing the build.
-   RAM: As far as the logs/database is concerned, anything around 16 MB
    should be sufficient.

  
The above requirement supports all the basic functionalities  of RDK-B.

------------------------------------------------------------------------

------------------------------------------------------------------------

<span style="color: rgb(0,0,0);"><u>***Is RPC-download implementation
not included in current RDK-B source code? After downloading and
reviewing RDK-B source code, I can't find the source code to implement
RPC-download to download firmware & make firmware upgrade. The namespace
responsible for RPC-download defined in tr069pa is
"com.cisco.spvtg.ccsp.fu.Configuration.", but no program registers this
namespace.***</u></span>

-   <span style="color: rgb(0,0,0);">RPC download is not supported in
    RDK-B.</span>
-   <span style="color: rgb(0,0,0);">RDK-B never had
    "cisco.spvtg.ccsp.fu.Configuration". This part of the code has come
    through initial code drop and is deprecated.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u><span style="color: rgb(0,51,102);">***Can we modify wifi
configuration of router through command line such as modifying ssid
name, ssid password, wifi security protocol etc in RDK?***</span></u>

<span style="color: rgb(0,0,0);">Yes. RDKB has the below options to
modify SSID name, password, security protocol etc.</span>

-   <span style="color: rgb(0,0,0);">A WebUI, where you can modify these
    items just like the UI for most normal routers.</span>
-   <span style="color: rgb(0,0,0);">'dmcli' command line utility which
    will execute TR69 commands to modify the mentioned items. <a
    href="https://wiki.rdkcentral.com/pages/viewpage.action?pageId=64784731"
    rel="nofollow"><strong> </strong></a>  </span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<span style="color: rgb(0,0,0);"><u>***Is it possible to interact with
TR-181 data model with IPC (inter process communication)? Assume that
there is a service running on RDK-B stack that wants to change WiFi
setting or get the status of WiFi from data model. If possible, is there
any specification available to communicate with RDK-B
stack?***</u></span>

<span style="color: rgb(0,0,0);">Yes. You can invoke the data models via
dmcli commands from your service or via Cdm\_GetParam set of APIs from
your code. The TR-181 data model specifications that are available in
the TR-181 data model XML for each component can be referred.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***In current source code, the client side MUST install device
private key and certificate files which are pair for ACS certificate,
then it possible to have HTTPS connection with ACS. HTTPS is not
supported in case of NO device key and certificate files pre-installed,
right?***</u>

<span style="color: rgb(23,43,77);">The CA certificate file and device
certificate/private key can be configured in ccsp\_tr069\_pa\_cfg.xml
for https support.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(0,51,102);">How to create a temporary
guest wifi remotely (via WebPA, TR-069) on a RDK-B?</span>***</u>

<span style="color: rgb(0,0,0);">There are already reserve SSID for
Guest WiFi network. Just enable the SSID using the respective DM to get
the features in place.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

***<span style="color: rgb(0,51,102);text-decoration: underline;">What
is jst and duktape in webui ?</span>***

<span style="color: rgb(23,43,77);">Duktape is a lightweight javascript
engine (</span><a href="https://duktape.org/" class="external-link"
rel="nofollow">https://duktape.org/</a><span style="color: rgb(23,43,77);">). </span><span style="color: rgb(23,43,77);">Alone
it does not provide a web development engine like php or node.js.
Therefore,</span><span style="color: rgb(23,43,77);">on top of duktape
there is a templating engine(called jst) and web server
api. </span><span style="color: rgb(23,43,77);">To make migration as
easy as possible the style of templating and api signiture will
match </span><span style="color: rgb(23,43,77);">php as closely as
possible. Many php functions and variables will be rewritten in
javascript, </span><span style="color: rgb(23,43,77);">so that changes
to the exist code is minimized.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

***<u><span style="color: rgb(0,51,102);">What is Persisting firewall
rule?</span></u>***

<span style="color: rgb(23,43,77);">It
actually </span><span style="color: rgb(32,33,36);">defines what kind of
Internet traffic is allowed or blocked. For more
details, </span><span style="color: rgb(23,43,77);">Please Refer
: </span><a
href="https://wiki.rdkcentral.com/display/RDK/Firewall+-+Rule+persistence"
rel="nofollow">https://wiki.rdkcentral.com/display/RDK/Firewall+-+Rule+persistence</a>

------------------------------------------------------------------------

------------------------------------------------------------------------

***<span style="color: rgb(0,51,102);text-decoration: underline;">What
is the procedure to add new parameter to the existing object?</span>***

<span style="color: rgb(0,51,102);"><span style="color: rgb(23,43,77);">Please
refer </span><a
href="https://wiki.rdkcentral.com/display/RDK/Integration+Guide+for+third-party+applications+into+RDK-B+stack"
rel="nofollow">https://wiki.rdkcentral.com/display/RDK/Integration+Guide+for+third-party+applications+into+RDK-B+stack</a><span style="color: rgb(23,43,77);"> .</span></span>

------------------------------------------------------------------------

------------------------------------------------------------------------

***<span style="color: rgb(0,51,102);text-decoration: underline;">I am
trying to setup a connection between rasp pi and my Web server. I have
raspberry pi 3 B+ with RDK-B image on it. I am not able to find parodus
logs in it. How to find the logs?</span>***

<span style="color: rgb(0,0,0);">Use journalctl -xu parodus or can look
for parodus.log in the log folder i.e. /rdklogs/logs/.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

***<span style="color: rgb(0,51,102);text-decoration: underline;">How to
upgrade python version in yocto as part of image build?</span>***

In &lt;image&gt;.bbappend file , upgrade python version using
ROOTFS\_POSTPROCESS\_COMMAND  
<u>Code :</u>

<table
class="wrapped confluenceTable ite-marked-table ite-virtual-table"
style="text-align: left;" data-ite-table-index="3" data-resolved="">
<tbody style="text-align: left;">
<tr class="odd" style="text-align: left;" data-ite-row-number="0">
<td class="confluenceTd" style="text-align: left;"
data-ite-col-number="0"><p><code class="sourceCode bash"
style="text-align: left;"><span class="co">#python upgrade</span></code><br />
<code class="sourceCode bash"
style="text-align: left;"><span class="ex">IMAGE_INSTALL_append</span> =</code><span><code
class="sourceCode bash"
style="text-align: left;"><span class="ex"> </span></code></span><code
class="sourceCode bash"
style="text-align: left;"><span class="st">&quot; python3 &quot;</span></code><br />
<code class="sourceCode bash"
style="text-align: left;"><span class="ex">ROOTFS_POSTPROCESS_COMMAND</span> +=</code><span><code
class="sourceCode bash"
style="text-align: left;"><span class="ex"> </span></code></span><code
class="sourceCode bash"
style="text-align: left;"><span class="st">&quot;enable_python3; &quot;</span></code><br />
<code class="sourceCode bash"
style="text-align: left;"><span class="fu">enable_python3()</span> <span class="kw">{</span></code><br />
<code class="sourceCode bash"
style="text-align: left;"><span class="fu">ln</span></code><span> </span><code
class="sourceCode bash"
style="text-align: left;"><span class="ex">-sf</span></code><span><code
class="sourceCode bash"
style="text-align: left;"><span class="ex"> </span></code></span><code
class="sourceCode bash"
style="text-align: left;"><span class="ex">/usr/bin/python3</span></code><span> </span><code
class="sourceCode bash"
style="text-align: left;"><span class="va">${IMAGE_ROOTFS}${bindir}</span></code><code
class="sourceCode bash"
style="text-align: left;"><span class="ex">/python</span></code><br />
<code class="sourceCode bash"
style="text-align: left;"><span class="er">}</span></code></p></td>
</tr>
</tbody>
</table>

On compiling the code and flashing the image , python3 will be available
in your board . Check with below command.

<table
class="wrapped confluenceTable ite-marked-table ite-virtual-table"
style="text-align: left;" data-ite-table-index="4" data-resolved="">
<tbody style="text-align: left;">
<tr class="odd" style="text-align: left;" data-ite-row-number="0">
<td class="confluenceTd" style="text-align: left;"
data-ite-col-number="0"><p><code class="sourceCode bash"
style="text-align: left;"><span class="ex">root@RaspberryPi-Gateway:~</span></code><code
class="sourceCode bash"
style="text-align: left;"><span class="co"># python --version</span></code><br />
<code class="sourceCode bash"
style="text-align: left;"><span class="ex">Python</span> 3.5.2</code></p></td>
</tr>
</tbody>
</table>

------------------------------------------------------------------------

------------------------------------------------------------------------

***<span style="color: rgb(0,51,102);text-decoration: underline;">What
to do if I encounter a Checksum mismatch while building image for
RaspberryPi?</span>***

Checksum mismatch error is related to Fetcher failure for URL . The ways
to fix this error are as follows

1.  the url might be deprecated . Hence should use the right URL with
    right path
2.  md5 checksum must be pointing to older one , which should be
    replaced with the latest checksum
3.  if the component is not required ( or not maintained ) , then they
    can be masked from inc file

------------------------------------------------------------------------

------------------------------------------------------------------------

<span style="color: rgb(0,0,0);"><u>***How to log RDK Components to
component log files instead of stdout ?***</u></span>

-   For this you need to convert all C/C++ logging statements(like
    printf) to use standard logging functions CcspTraceInfo,
    CcspTraceWarning,CcspTraceError etc. CcspTraceXxxx functions are
    based on open-source 'log4c'.
-   By using the above apis the logs are automatically written to
    logfiles.
-   After conversion to standard logging functions ,you can verify the
    logs under /rdklogs/logs/.

------------------------------------------------------------------------

------------------------------------------------------------------------

  

------------------------------------------------------------------------

## RDK-Common

<u>***<span style="color: rgb(60,79,84);">Is there a consolidated
logging system like SYSLOG available?</span>***</u>

<span style="color: rgb(60,79,84);">yes, all logs are maintained in
persistent path (opt/logs) log rotation available if size goes beyond.
Log server are in place. More details on how logging is done in RDK can
be found here:   <a
href="https://developer.rdkcentral.com/documentation/documentation/device_management/log_upload/"
class="external-link" rel="nofollow">Log Upload</a>, <a
href="https://developer.rdkcentral.com/documentation/documentation/rdk_video_documentation/rdk-v_components/rdk-v_open-sourced_components/rdk_logger/"
class="external-link" rel="nofollow">RDK Logger</a> </span>

------------------------------------------------------------------------

------------------------------------------------------------------------

### Telemetry

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Do we really need to setup DCM
configuration in the Xconf to use telemetry?</span>***</u>

<span style="color: rgb(60,79,84);">Yes, Because telemetry itself is a
subset of Device Configuration management aka DCM and we need to
configure the DCM logupload settings before setting up telemetry
configuration</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">In telemetry 2.0, what is the
use of setting up profiles via T2 Report Profiles(JSON blob with
configuration) compared to the legacy telemetry profiles?</span>***</u>

<span style="color: rgb(60,79,84);">By using T2 Report profiles, we can
setup multiple telemetry profiles. Each profile can have different set
of telemetry markers , telemetry upload location URL and telemetry
upload schedule. The different telemetry JSON data will be uploaded
separately. Thus multiple telemetry profiles is achieved.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Will the reports be uploaded
to Splunk server/ Telemetry upload server when the T2 Report profiles
are set using dmcli command?</span>***</u>

<span style="color: rgb(60,79,84);">Yes, the T2 report profile will have
the upload URL along with the telemetry markers, The upload repository
in different profiles can be same or different. So based on the
configured URL in these T2 report profiles, the data will be uploaded to
the respective URLs .</span>

  

  

------------------------------------------------------------------------

## RDK-Cloud

<u>***<span style="color: rgb(60,79,84);">How to configure xconf in
local machine?</span>***</u>

<span style="color: rgb(60,79,84);">To know the Complete steps for xconf
local setup , Please refer : <a
href="https://wiki.rdkcentral.com/display/RDK/Xconf+Server+-+User+guide+for+configuration+and+feature+validation"
rel="nofollow">https://wiki.rdkcentral.com/display/RDK/Xconf+Server+-+User+guide+for+configuration+and+feature+validation</a></span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="letter-spacing: 0.0px;">If I wanted to run my
Cassandra database on a separate node, where in the Xconf configuration
would I pass in the details for that?</span>***</u>

In service.properties, you can add the following properties.  The
“seeds” property is just a comma-separated list of a few Cassandra
hosts.  If you are using a single host, then it’s just that one.  The
other properties may not be needed.

connectionPools.SharedConnectionPool.seeds=192.168.0.100,192.168.0.101  
connectionPools.SharedConnectionPool.localDatacenter=DC\_NAME  
connectionPools.SharedConnectionPool.readConsistencyLevel=CL\_LOCAL\_QUORUM  
connectionPools.SharedConnectionPool.writeConsistencyLevel=CL\_LOCAL\_QUORUM  
connectionPools.SharedConnectionPool.autoDiscoverHosts=true

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span class="expand-control-text" style="color: rgb(60,79,84);">Is
it possible to run xconf-angular-admin and xconf-dataservice on separate
nodes? If yes, is there any specific configuration that will basically
allow both the services to discover each other?</span>***</u>

<span style="color: rgb(60,79,84);letter-spacing: 0.0px;">Yes, it can be
run on separate nodes. The admin and data service do not need to
discover each other.  They both use the Cassandra database, so they need
to be able to reach it.  If you install the admin and data service on
separate nodes, you will probably have Cassandra on a third node.  The
service.properties file for each service should include the “seeds”
property.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span class="expand-control-text"
style="color: rgb(60,79,84);">How to configure Firmware Download
Location in XConf?</span>***</u>

Steps –

1.  Go to the Firmware menu and select Download Location Filter.
2.  Select Edit.
3.  Enter the FQDN for the firmware download server.
4.  Enter the full http location for the firmware download server.
5.  Enter an IP address for TFTP and enter 100%.  (This download method
    will not be used.)
6.  Select Save.

Refer <a
href="https://wiki.rdkcentral.com/display/RDK/Xconf+Server+-+User+guide+for+configuration+and+feature+validation#XconfServerUserguideforconfigurationandfeaturevalidation-FeatureValidation(Firmwareupdate)"
rel="nofollow">https://wiki.rdkcentral.com/display/RDK/Xconf+Server+-+User+guide+for+configuration+and+feature+validation#XconfServerUserguideforconfigurationandfeaturevalidation-FeatureValidation(Firmwareupdate)</a> for
more details.

------------------------------------------------------------------------

------------------------------------------------------------------------

<span style="color: rgb(0,51,102);"><u>***How to use WebPA to interact
with the data model? Is this local web service running on RDK-B to
manage RDK-B data model?***</u></span>

<span style="color: rgb(60,79,84);">There should be a webpa server
running somewhere (to which the device can contact). If the server is in
place, you can run the commands to fetch data models from a PC that can
connect to server or even from the RPi terminal itself.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span class="expand-control-text"
style="color: rgb(60,79,84);">What is the connection between webpa and
xconf server? Any documentation is there to check?</span>***</u>

-   <span style="color: rgb(60,79,84);">As such they don’t have any
    connection between them.</span>
-   <span style="color: rgb(60,79,84);">While xconf is for pushing
    device specific configurations to CPE, webPA is for remote device
    management.</span>
-   <span style="color: rgb(60,79,84);">You can refer the
    <a href="https://wiki.rdkcentral.com/display/RDK/XConf+Server"
    rel="nofollow">https://wiki.rdkcentral.com/display/RDK/XConf+Server</a> and
    <a href="https://wiki.rdkcentral.com/display/RDK/WebPA"
    rel="nofollow">https://wiki.rdkcentral.com/display/RDK/WebPA</a> for
    more details.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Is there any feature in xconf
server to update webpa cluster url in device?</span>***</u>

<span style="color: rgb(60,79,84);">As of now we don’t have a provision
to update the webPA url from xconf.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

***<u><span class="expand-control-text"
style="color: rgb(60,79,84);">How to set a parameter on the RDK device?
For example, if we need to change the SSID?</span></u>***

This is setting a parameter using webPA 

-   <span style="color: rgb(60,79,84);">Setting the SSID Password
    :</span>

curl -X PATCH <a
href="http://35.155.171.121:9003/api/v2/device/mac:b827eb5681cd/config"
class="external-link" style="text-decoration: none;"
rel="nofollow">http://35.155.171.121:9003/api/v2/device/mac:b827eb5681cd/config</a> -d
‘{“parameters”: \[ {“dataType”: 0, “name”:
“Device.WiFi.SSID.10001.SSID”, “value”: “Testing”}\]}’ -H
‘Authorization:Basic d2VicGFAMTIzNDU2Nzg5MAo=’

-   <span style="color: rgb(60,79,84);">Getting the SSID for the
    board.</span>

curl -X GET ‘<a
href="http://35.155.171.121:9003/api/v2/device/mac:b827eb5681cd/config?names=Device.WiFi.SSID.10001.SSID"
class="external-link" style="text-decoration: none;"
rel="nofollow">http://35.155.171.121:9003/api/v2/device/mac:b827eb5681cd/config?names=Device.WiFi.SSID.10001.SSID</a>‘
-H ‘Authorization:Basic d2VicGFAMTIzNDU2Nzg5MAo=’

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">While trying to create a model
using POST api request, I am getting 404 error. (xconf\_Server ip i have
no exposed or mentioned here and we are using 9092 for xconf server)
GET/retrieval works fine. But again DELETE has the same
problem.</span>***</u>

You can delete a model using below command

-   <span style="color: rgb(60,79,84);">$ curl -i -X
    DELETE <a href="http://xconf_server_ip:9092/delete/models/XYZ123"
    class="external-link" style="text-decoration: none;"
    rel="nofollow">http://xconf_server_ip:9092/delete/models/XYZ123</a></span>

Retrieve list of models & check the particular entry is deleted:

-   <span style="color: rgb(60,79,84);">$ curl
    -i <a href="http://xconf_server_ip:9092/queries/models"
    class="external-link" style="text-decoration: none;"
    rel="nofollow">http://xconf_server_ip:9092/queries/models</a></span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Could you tell me the command
to create mac list, retrieve and delete mac list?</span>***</u>

<span style="color: rgb(60,79,84);">.ns list for mac list</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Can you share the steps to
setup themis as key server for authorization to scytale?</span>***</u>

<span style="color: rgb(60,79,84);">Themis was not part of the community
XMidt server, we will discuss with developer and update the wiki.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span class="expand-control-text"
style="color: rgb(60,79,84);">What is WebPA?</span>***</u>

-   <span style="color: rgb(60,79,84);">WebPA is the communication
    channel from Cloud to RDK based home gateway devices. It helps to
    manage devices from Cloud. It was built from the ground up
    specifically with security and performance as priorities.  </span>
-   <span style="color: rgb(60,79,84);">WEBPA protocol provides
    functionality of read/write access to device management
    parameters.</span>
-   <span style="color: rgb(60,79,84);">The “PA” in WebPA stands for
    “Protocol Adapter.” It’s a component used to connect devices to
    clouds in a way that RDK licensees call “trivially scalable.”</span>

<span style="color: rgb(60,79,84);"><span style="color: rgb(0,0,0);">Refer </span><a href="https://wiki.rdkcentral.com/display/RDK/WebPA"
rel="nofollow">https://wiki.rdkcentral.com/display/RDK/WebPA</a><span style="color: rgb(0,0,0);"> for
more information.</span></span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">What is basic WebPA Setup and
WebPA testing process?</span>***</u>

<span style="color: rgb(60,79,84);">Refer Environment Setup in <a
href="https://wiki.rdkcentral.com/display/RDK/RDK-C+%3A+WebPA+Support"
rel="nofollow">https://wiki.rdkcentral.com/display/RDK/RDK-C+%3A+WebPA+Support</a></span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span class="expand-control-text"
style="color: rgb(60,79,84);">Difference between WebPA and
TR69?</span>***</u>

<span class="expand-control-text"
style="color: rgb(60,79,84);"><span style="color: rgb(60,79,84);">TR-69
polls wide-and-deep across a device landscape, on a less frequent basis
whereas WebPA can precision-poll for the most useful data, much more
quickly. That’s mainly because it’s lightweight, and because the load
can be redistributed into all the apps needing to access the
data.</span></span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Can you mention few basic
examples of Curl commands?</span>***</u>

**Example 1: **Fetch device or feature parameter detail from client( RPI
) device through parodus by using webpa server.

-   <span style="color: rgb(60,79,84);">curl -H ‘Authorization:Basic
    dXNlcjp3ZWJwYQo=’ -i ‘<a
    href="http://34.244.61.191:9003/api/v2/device/mac:b827eb2e722b/config?names=Device.DeviceInfo.X_RDKCENTRAL-COM_IMAGENAME"
    class="external-link" style="text-decoration: none;"
    rel="nofollow">http://192.168.2.75:9003/api/v2/device/mac:b827eb2e722b/config?names=Device.DeviceInfo.X_RDKCENTRAL-COM_IMAGENAME</a>‘</span>

**Example 2:** Setting the SSID Password :

-   <span style="color: rgb(60,79,84);">curl -X PATCH <a
    href="http://35.155.171.121:9003/api/v2/device/mac:b827eb5681cd/config"
    class="external-link" style="text-decoration: none;"
    rel="nofollow">http://35.155.171.121:9003/api/v2/device/mac:b827eb5681cd/config</a> -d
    ‘{“parameters”: \[ {“dataType”: 0, “name”:
    “Device.WiFi.SSID.10001.SSID”, “value”: “Testing”}\]}’ -H
    ‘Authorization:Basic d2VicGFAMTIzNDU2Nzg5MAo=’</span>

**Example 3:** Getting the SSID for the board.

-   <span style="color: rgb(60,79,84);">curl -X GET ‘<a
    href="http://35.155.171.121:9003/api/v2/device/mac:b827eb5681cd/config?names=Device.WiFi.SSID.10001.SSID"
    class="external-link" style="text-decoration: none;"
    rel="nofollow">http://35.155.171.121:9003/api/v2/device/mac:b827eb5681cd/config?names=Device.WiFi.SSID.10001.SSID</a>‘
    -H ‘Authorization:Basic d2VicGFAMTIzNDU2Nzg5MAo=’</span>

Refer WEBPA Validation Procedure Steps in <a
href="https://wiki.rdkcentral.com/display/RDK/RDK-C+%3A+WebPA+Support#RDKC:WebPASupport-WEBPAValidationProcedure"
rel="nofollow">https://wiki.rdkcentral.com/display/RDK/RDK-C+%3A+WebPA+Support#RDKC:WebPASupport-WEBPAValidationProcedure</a> for
more information.

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>**<span class="expand-control-text" style="color: rgb(60,79,84);">Is
it possible to configure TFTP location for Firmware upgrade in Xconf
?</span>**</u>

<span class="expand-control-text"
style="color: rgb(60,79,84);"><span style="color: rgb(60,79,84);">Yes
,it is possible to configure TFTP ipv4 and ipv6 locations in Xconf.
Follow the steps specified here </span><a
href="https://wiki.rdkcentral.com/display/RDK/Xconf+Server+-+User+guide+for+configuration+and+feature+validation#XconfServerUserguideforconfigurationandfeaturevalidation-AddTFTPlocation"
rel="nofollow">https://wiki.rdkcentral.com/display/RDK/Xconf+Server+-+User+guide+for+configuration+and+feature+validation#XconfServerUserguideforconfigurationandfeaturevalidation-AddTFTPlocation</a></span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span class="expand-control-text"
style="color: rgb(60,79,84);">Any tools to process big data for
presentation on Xconf server side?</span>***</u>

<span class="expand-control-text"
style="color: rgb(60,79,84);"><span style="color: rgb(60,79,84);">Xconf
doesn’t store any data, be it logs or telemetry data. It only provides
the configuration to the client device regarding where to upload the
data, when to upload the data and what data it needs to be uploaded. So
Xconf server doesn’t need any big data processing tools.</span></span>

------------------------------------------------------------------------

------------------------------------------------------------------------

### Xconf

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Is there a direct interaction
or dependency between the RDK cloud components Xconf and
WebPA?</span>***</u>

<span style="color: rgb(60,79,84);">There is no direct interaction, both
Xconf and WebPA serve different purpose. While Xconf is used by devices
to fetch and configure the rules, webPA can be used to push/set the
rules/attributes on a CPE device.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Does xconf upload the logs to
any servers?</span>***</u>

<span style="color: rgb(60,79,84);">No, xconf doesn’t directly
facilitate upload logs/telemetry data. It provides devices information
on where/when to upload the log files or telemetry json files</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">With the new
maven-frontend-plugin, do we need to install node and npm in the
server?</span>***</u>

<span style="color: rgb(60,79,84);">No, the maven-frontend-plugin plugin
downloads/installs Node and NPM locally for your project, runs npm
install. It’s supposed to work on Windows, OS X and Linux.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span class="expand-control-text" style="color: rgb(60,79,84);">Is
it possible to override the firmware download location set from the
‘Download location filter’ page?</span>***</u>

<span class="expand-control-text"
style="color: rgb(60,79,84);"><span style="color: rgb(60,79,84);">Yes,
If anyone needs to override the firmware download location, it’s best to
do it with a define property rule. It will only affect those devices
identified in the rule.</span>  
<span style="color: rgb(60,79,84);">Just like tftp location is
overridden like this – </span><a
href="https://wiki.rdkcentral.com/display/RDK/Xconf+Server+-+User+guide+for+configuration+and+feature+validation#XconfServerUserguideforconfigurationandfeaturevalidation-AddTFTPlocation"
rel="nofollow">https://wiki.rdkcentral.com/display/RDK/Xconf+Server+-+User+guide+for+configuration+and+feature+validation#XconfServerUserguideforconfigurationandfeaturevalidation-AddTFTPlocation</a></span>

  

  

------------------------------------------------------------------------

#@ Miscellaneous

<u>***<span style="color: rgb(60,79,84);">What is the Roadmap for the
RDK?</span>***</u>

<span style="color: rgb(60,79,84);">The roadmap is always available to
the Preferred and Preferred Plus members of RDK
at <a href="https://wiki.rdkcentral.com/display/ASP/Roadmap"
style="text-decoration: none;text-align: left;" rel="nofollow"
title="https://wiki.rdkcentral.com/display/asp/roadmap">https://wiki.rdkcentral.com/display/ASP/Roadmap</a> .
To become a preferred member as well as to know the benefits, please
visit <a href="https://rdkcentral.com/memberships/" class="external-link"
style="text-decoration: none;text-align: left;" rel="nofollow"
title="https://rdkcentral.com/memberships/">https://rdkcentral.com/memberships/</a> 
. For the non preferred members, you can get answers to specific queries
on Roadmap items by
contacting <a href="mailto:support@rdkcentral.com" class="external-link"
style="text-decoration: none;text-align: left;"
rel="nofollow">support@rdkcentral.com</a> or asking
at <a href="https://wiki.rdkcentral.com/display/FORUMS/FORUMS+Home"
style="text-decoration: none;text-align: left;"
rel="nofollow">https://wiki.rdkcentral.com/display/FORUMS/FORUMS+Home</a> .</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How to analyze the crash core
dump ?</span>***</u>

<span style="color: rgb(60,79,84);">Please
refer <a href="https://wiki.rdkcentral.com/display/RDK/Breakpad+steps"
rel="nofollow">https://wiki.rdkcentral.com/display/RDK/Breakpad+steps</a></span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">When did the “RDK Entity”
established for governance of RDK Components,features and process
?</span>***</u>

<span style="color: rgb(60,79,84);">On 15 August 2013 Comcast Cable and
Time Warner Cable <a
href="http://corporate.comcast.com/news-information/news-feed/comcast-and-time-warner-cable-form-rdk-management-llc"
class="external-link" style="text-decoration: none;text-align: left;"
rel="nofollow">jointly announced</a> the formation of RDK Management,
LLC to fulfill the role of the “RDK Entity”.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How will backward
compatibility be supported as new versions of the RDK are
released?</span>***</u>

<span style="color: rgb(60,79,84);">We will maintain compatibility with
the previous RDK version as described by the guidelines in the
agreement. Additional details will be posted on the RDK Wiki as they
become available.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">What happens in the RDK if you
do not want to take a whole new baseline?</span>***</u>

<span style="color: rgb(60,79,84);">Licensee are not required to take a
new baseline.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">What if any commercial
licenses are there, are there any that require royalties?</span>***</u>

<span style="color: rgb(60,79,84);">RDKM does not assess run-time
royalties for the Generic RDK.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">What sort of modifications to
the RDK are needed to support Digital Video Broadcasting
(DVB)?</span>***</u>

<span style="color: rgb(60,79,84);">The infrastructure to support DVB
exists today; but additional components may need to be developed to
support the particular network type. Typical enhancements include
converting a URI to a network-specific identifier in the SI handling,
and enhancing the security processor to implement CA that doesn’t use
the cable card.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Which Closed Caption
specifications are implemented in RDK?</span>***</u>

<span style="color: rgb(60,79,84);">RDK supports CEA-708 and
EIA-608.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Are fonts for
closed-captioning provided with RDK?</span>***</u>

The font-type used for Closed Captioning belongs to an opensource family
called Droid with specific glyphs for closed captions. Incase operators
are using licensed fonts they have to meet the exclusive license
requirements for those fonts.

OEM vendors will need to work with font vendors to provide fonts that
comply with FCC standards. RDK Support is looking into whether
FCC-compliant open-source fonts are available, and will provide that
information in a future update.

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">What is required to support a
new Video on Demand (VOD) system in RDK?</span>***</u>

<span style="color: rgb(60,79,84);">To add VOD support for a different
system, the VOD client would be rewritten to talk to the appropriate
backend to provide content. This is an independent implementation and
not coupled to any specific MSO configuration. The client is responsible
for tuning to the content, connecting it to a sink, and starting
streaming. It comes into play only after a VOD request is received by
the receiver, the purchase is completed, and the connection is created
(*i.e.,* broadcast has started from servers side). Because time shift
buffers are not allowed for VOD content, trickplay commands are merely
forwarded to the content source, which is responsible for taking the
appropriate actions.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Does RDK support Audio and
Video Text tags in HTML5?</span>***</u>

<span style="color: rgb(60,79,84);">Yes, RDK supports these tags in the
current version</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">What is the status of the RDK
Device Setting API?</span>***</u>

<span style="color: rgb(60,79,84);">Device Settings is integrated with
IARM, which invokes the HAL API to effect changes requested by the
application. Interface specifications are available for application
developers.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Are there any certified
RDK-compliant DMP or DMS devices today?</span>***</u>

<span style="color: rgb(60,79,84);">The IP client provided by RDK works
with the RDK Server, not the general DMS. This is the direction for now.
CVP-1 and CVP-2 certification are planned for RDK Servers.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Will there be a clear
separation of IP and Hybrid components?</span>***</u>

<span style="color: rgb(60,79,84);">Separate RDK release packages will
be available for IP and Hybrid versions. The requirements will draw a
clear distinction between IP and Hybrid components</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Are there APIs to control
front-panel brightness?</span>***</u>

<span style="color: rgb(60,79,84);">Control of front-panel brightness
and other front-panel controls such as LED displays, power-button and
similar controls will be specified as part of the Comcast Manufacturer
Interface Specification.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Why are so many components
built from external source? The recipes for these components build from
git but this is then overridden by
meta-cmf/conf/distro/include/rdk-external-src.inc which means these
components are never saved in the sstate cache making builds much longer
than necessary. Also, many of the components compile on every rebuild
even though nothing has changed.</span>***</u>

<span style="color: rgb(60,79,84);">The answer can be “extsrc is used to
faciliate easy development work. If it is preferred otherwise, there is
a XXX-nosrc.xml manifest file which will be retained after the first
build and hence saving time </span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">What will be changing in the
development environment?</span>***</u>

Many developments  & improvements happening in RDK .Few are listed
below.

-   Doxygen : <span style="color: rgb(60,79,84);">Video & Broadband
    documentations are available in the following locations.</span>
    -   For
        Broadband: <a href="https://wiki.rdkcentral.com/doxygen/rdkb/index.html"
        style="text-decoration: none;"
        rel="nofollow">https://wiki.rdkcentral.com/doxygen/rdkb/index.html</a>
    -   For Video: <a
        href="https://wiki.rdkcentral.com/doxygen/rdkv-opensourced/index.html"
        style="text-decoration: none;"
        rel="nofollow">https://wiki.rdkcentral.com/doxygen/rdkv-opensourced/index.html</a>
-   Github
    : <a href="https://github.com/rdkcentral/" class="external-link"
    style="text-decoration: none;"
    rel="nofollow">https://github.com/rdkcentral/</a>
-   Systemd

For latest updates see Announcements
at <a href="https://wiki.rdkcentral.com/" style="text-decoration: none;"
rel="nofollow">https://wiki.rdkcentral.com/</a> page and 
“<span class="expand-control-text">What is the Roadmap for the
RDK?</span>” question in this page to know about the Roadmap of RDK.

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">I have changes to 2 or more
repos that are dependent on each other.  How do I force them to be
submitted at the same time so the build doesn’t break?</span>***</u>

1.  <span class="s1">git commit your changes in both the local
    repos</span>
2.  <span class="s1">Create a branch and check it out in both repos make
    sure it has the SAME NAME (i.e. git checkout -b
    my\_special\_changes)</span>
3.  <span class="s2">Then finally do a git review in both repos (or more
    specifically git review master or git review stable2)</span>

<span class="s2">What this does:</span>

<span class="s2">In gerrit the changes will be put up for review in the
branch you specified in your git review command (master or
stable2). </span>At the same time it will set the Topic field to the
name of your local branch (i.e. my\_special\_changes). When gerrit sees
topic fields with identical names it binds them together. So it forces
project maintainers to press the “Submit Together” button so they go in
at the same time once given +2.

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">TDK- How to install Groovy
2.0.6 in VM (until M75)?</span>***</u>

Install SDK if it is not already installed by following the steps under
the previous heading. Install Groovy version 2.0.7 / 2.0.6 (until
M75)using the below command 

-   <span style="color: rgb(60,79,84);">`sdk install groovy 2.0.6`</span>

Check groovy version :

-   <span style="color: rgb(60,79,84);">groovy -version</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span class="expand-control-text"
style="color: rgb(60,79,84);">TDK- How to install Groovy 2.3.0 in VM?
(M76 onwards)?</span>***</u>

From M76 release onwards, the supported groovy version is groovy
2.3.0. Install SDK if it is not already installed by following the steps
under the previous heading. Install Groovy version 2.3.0 using the below
command –

-   <span style="color: rgb(60,79,84);">sdk install groovy 2.3.0</span>

Check groovy version :

-   <span style="color: rgb(60,79,84);">groovy –version</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">TDK- How to install
MySQL?</span>***</u>

Follow are the commands to install MySQL

-   <span style="color: rgb(60,79,84);">sudo apt-get install
    mysql-server      </span>

mysql installation will ask for the password during installation. (give
the root password)

If validate\_password plugin is present for Mysql, set the password
policy as LOW using the below command

-   <span style="color: rgb(60,79,84);">set GLOBAL
    validate\_password\_policy=LOW; flush privileges”;</span>

Login to mysql prompt

-   <span style="color: rgb(60,79,84);">sudo mysql -u root -p</span>

It will ask for password, give the root password given during
installation.

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Are there size restrictions
for the firmware image?</span>***</u>

<span style="color: rgb(60,79,84);">There is no size restrictions
imposed by RDK as such, the limits depends on SoC and OEM factors
including Flash size. The firmware image will be compressed using
SquashFS with LZMA compression.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Does IARM support advanced
options such as marshaling, intersection, language specific code
generation? Are there performance metrics for IARM?</span>***</u>

<span style="color: rgb(60,79,84);">No advanced options are currently
supported by the IARM.  It is mainly an event bus with a pub/sub
metaphor.  A lot of what is available is driven by the need.  If some of
the features are needed we should see a feature request.  We are open to
discussion of improvement as long as there is a case for it. No metrics
have been captured at this time outside of the overall cloud metrics
where IARM is part of the overall latency.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How are redundant components
(e.g., Mongoose and Lighttpd) addressed?</span>***</u>

<span style="color: rgb(60,79,84);">The various components in RDK have
dependencies on other components, and some of these have similar
functions. As long as the claims on memory and other system resources is
small (*e.g.*, Mongoose is a single file) it may be expedient to retain
these redundant components.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">Do we need to support/provide
HDMI 2.0?</span>***</u>

<span style="color: rgb(60,79,84);">It is optional and some devices is
known to have HDMI 2.0 such as accelerator.</span>

------------------------------------------------------------------------

------------------------------------------------------------------------

<u>***<span style="color: rgb(60,79,84);">How to get plain RDK source
code without soc?</span>***</u>

 Checkout relevant code repos based on your requirements
from <a href="https://code.rdkcentral.com/r/admin/repos"
class="external-link" style="text-decoration: none;"
rel="nofollow">https://code.rdkcentral.com/r/admin/repos</a>

1.  For Open sourced components, search for required component in the
    filter option to get the relevant code repo.
2.  For Licensed components, sign in
    to <a href="https://code.rdkcentral.com/r/admin/repos"
    class="external-link" style="text-decoration: none;"
    rel="nofollow">https://code.rdkcentral.com/r/admin/repos</a> using
    username and password,and search for required component in the
    filter option to get the relevant code repo.

  

  

------------------------------------------------------------------------

  

<span class="aui-icon aui-icon-small aui-iconfont-add"></span>

<span class="aui-dropdown2-heading" aria-hidden="true"></span>

<a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
role="menuitem" tabindex="-1"><span
class="aui-icon aui-icon-small table-filter-inserter"></span>Filter
table data<span class="aui-icon aui-icon-wait"></span></a><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
role="menuitem" tabindex="-1"><span
class="aui-icon aui-icon-small pivot-table-inserter"></span>Create a
pivot table<span class="aui-icon aui-icon-wait"></span></a><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
role="menuitem" tabindex="-1"><span
class="aui-icon aui-icon-small table-chart-inserter"></span>Create a
chart from data series<span class="aui-icon aui-icon-wait"></span></a>

<span class="aui-dropdown2-heading" aria-hidden="true"></span>

<a href="https://wiki.rdkcentral.com/users/tfac-settings.action"
role="menuitem" tabindex="-1"><span
class="aui-icon aui-icon-small aui-iconfont-configure"
title="Configure visibility"></span>Configure buttons visibility</a>

<span class="tf-inline-filter" title="Filter column"></span>

<span class="aui-icon aui-icon-small"></span>

<a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ"
class="like-button"><span
class="aui-icon aui-icon-small aui-iconfont-like"></span><span
class="like-button-text">Like</span></a><span class="like-summary like-summary-margin-left">Be
the first to like this</span>

-   <a href="https://wiki.rdkcentral.com/label/DOC/faq"
    class="aui-label-split-main" rel="tag">faq</a>
-   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    class="show-labels-editor" title="Edit Labels (Type &#39;l&#39;)"><span
    class="aui-icon aui-icon-small aui-iconfont-devtools-tag-small">Edit
    Labels</span></a>

<a
href="https://wiki.rdkcentral.com/users/profile/editmyprofilepicture.action"
class="userLogoLink userlink-1" data-username="narayanaswamy"
data-user-hover-bound="true"><img src="./faq_files/add_profile_pic.svg"
class="userLogo logo defaultLogo"
alt="User icon: Add a picture of yourself" /></a>

Write a comment...

<span class="toolbar-item"><a
href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ?showComments=true&amp;showCommentArea=true#addcomment"
id="add-comment-rte" class="toolbar-trigger" accesskey="m">Add
Comment</a></span>

Overview

Community Forums

Content Tools

Tasks

Powered by a free **Atlassian Confluence Open Source Project License**
granted to Cognizant United States. [Evaluate Confluence
today](https://www.atlassian.com/software/views/opensource-community-additional-license-offer).  

This Confluence installation runs a Free Gliffy License - Evaluate the
[Gliffy Confluence
Plugin](http://www.gliffy.com/products/confluence-plugin/) for your
Wiki!

-   Powered by <a href="http://www.atlassian.com/software/confluence"
    class="hover-footer-link" rel="nofollow">Atlassian Confluence</a>
    <span id="footer-build-information">7.13.8</span>
-   Printed by Atlassian Confluence 7.13.8
-   <a href="https://support.atlassian.com/help/confluence"
    class="hover-footer-link" rel="nofollow">Report a bug</a>
-   <a href="https://www.atlassian.com/company" class="hover-footer-link"
    rel="nofollow">Atlassian News</a>

<a href="http://www.atlassian.com/" rel="nofollow">Atlassian</a>

<span id="confluence-server-performance"
style="display:none;">{"serverDuration": 890, "requestCorrelationId":
"860b9eb570a0ee03"}</span>

1.  <a href="https://wiki.rdkcentral.com/display/DOC"
    target="_blank">DOCUMENTATION</a>
2.  <a href="https://wiki.rdkcentral.com/collector/pages.action?key=DOC"
    target="_blank">Pages</a>
3.  <a href="https://wiki.rdkcentral.com/display/DOC/RDK+Documentation+Home"
    target="_blank">RDK Documentation Home</a>
4.  <a href="https://wiki.rdkcentral.com/display/DOC/Support"
    target="_blank">Support</a>
5.  <span class="edited-page-title"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ"
    target="_blank">RDK FAQ</a></span>

search

recentlyviewed

attachments

weblink

advanced

image-effects

image-attributes

-   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    id="format-dropdown-display"
    class="toolbar-trigger aui-dd-trigger aui-button"
    data-control-id="formatselect" data-resolved=""><span
    class="dropdown-text">Paragraph</span> <span
    class="icon aui-icon aui-icon-small aui-iconfont-dropdown"></span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link">Paragraph</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link">Heading 1</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link">Heading 2</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link">Heading 3</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link">Heading 4</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link">Heading 5</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link">Heading 6</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link">Preformatted</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link">Quote</a>

<!-- -->

-   <span id="rte-button-bold"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    class="toolbar-trigger" data-control-id="bold"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-bold">Bold</span></a></span>

-   <span id="rte-button-italic"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    class="toolbar-trigger" data-control-id="italic"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-italic">Italic</span></a></span>

-   <span id="rte-button-underline"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    class="toolbar-trigger" data-control-id="underline"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-underline">Underline</span></a></span>

-   <span id="color-picker-control"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    id="rte-button-color" class="toolbar-trigger aui-button"
    data-color="003366" data-tooltip="Color" data-resolved=""><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-color">Color
    picker</span><span class="selected-color"></span></a></span>
    <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    id="rte-button-color-selector"
    class="toolbar-trigger aui-dd-trigger aui-button"
    data-control-id="colorSelector" data-tooltip="More colors"
    data-resolved=""><span
    class="icon aui-icon aui-icon-small aui-iconfont-dropdown">More
    colors</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Black" data-tooltip="Black"
        style="background-color: #000000" data-color="000000"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Burnt orange" data-tooltip="Burnt orange"
        style="background-color: #993300" data-color="993300"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Dark olive" data-tooltip="Dark olive"
        style="background-color: #333300" data-color="333300"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Dark green" data-tooltip="Dark green"
        style="background-color: #003300" data-color="003300"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Dark azure" data-tooltip="Dark azure"
        style="background-color: #003366" data-color="003366"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Navy blue" data-tooltip="Navy blue"
        style="background-color: #000080" data-color="000080"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Indigo" data-tooltip="Indigo"
        style="background-color: #333399" data-color="333399"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Very dark grey" data-tooltip="Very dark grey"
        style="background-color: #333333" data-color="333333"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Maroon" data-tooltip="Maroon"
        style="background-color: #800000" data-color="800000"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Orange" data-tooltip="Orange"
        style="background-color: #FF6600" data-color="FF6600"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Olive" data-tooltip="Olive"
        style="background-color: #808000" data-color="808000"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Green" data-tooltip="Green"
        style="background-color: #008000" data-color="008000"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Teal" data-tooltip="Teal" style="background-color: #008080"
        data-color="008080"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Blue" data-tooltip="Blue" style="background-color: #0000FF"
        data-color="0000FF"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Greyish blue" data-tooltip="Greyish blue"
        style="background-color: #666699" data-color="666699"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Grey" data-tooltip="Grey" style="background-color: #7A869A"
        data-color="7A869A"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Red" data-tooltip="Red" style="background-color: #FF0000"
        data-color="FF0000"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Amber" data-tooltip="Amber"
        style="background-color: #FF9900" data-color="FF9900"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Yellow green" data-tooltip="Yellow green"
        style="background-color: #99CC00" data-color="99CC00"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Sea green" data-tooltip="Sea green"
        style="background-color: #339966" data-color="339966"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Turquoise" data-tooltip="Turquoise"
        style="background-color: #33CCCC" data-color="33CCCC"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Royal blue" data-tooltip="Royal blue"
        style="background-color: #3366FF" data-color="3366FF"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Purple" data-tooltip="Purple"
        style="background-color: #800080" data-color="800080"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Medium grey" data-tooltip="Medium grey"
        style="background-color: #A5ADBA" data-color="A5ADBA"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Magenta" data-tooltip="Magenta"
        style="background-color: #FF00FF" data-color="FF00FF"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Gold" data-tooltip="Gold" style="background-color: #FFCC00"
        data-color="FFCC00"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Yellow" data-tooltip="Yellow"
        style="background-color: #FFFF00" data-color="FFFF00"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Lime" data-tooltip="Lime" style="background-color: #00FF00"
        data-color="00FF00"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Aqua" data-tooltip="Aqua" style="background-color: #00FFFF"
        data-color="00FFFF"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Sky blue" data-tooltip="Sky blue"
        style="background-color: #00CCFF" data-color="00CCFF"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Red violet" data-tooltip="Red violet"
        style="background-color: #993366" data-color="993366"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Light grey" data-tooltip="Light grey"
        style="background-color: #C1C7D0" data-color="C1C7D0"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Pink" data-tooltip="Pink" style="background-color: #FF99CC"
        data-color="FF99CC"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Peach" data-tooltip="Peach"
        style="background-color: #FFCC99" data-color="FFCC99"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Light yellow" data-tooltip="Light yellow"
        style="background-color: #FFFF99" data-color="FFFF99"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Pale green" data-tooltip="Pale green"
        style="background-color: #CCFFCC" data-color="CCFFCC"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Pale cyan" data-tooltip="Pale cyan"
        style="background-color: #CCFFFF" data-color="CCFFFF"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Light sky blue" data-tooltip="Light sky blue"
        style="background-color: #99CCFF" data-color="99CCFF"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="Plum" data-tooltip="Plum" style="background-color: #CC99FF"
        data-color="CC99FF"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        aria-label="White" data-tooltip="White"
        style="background-color: #FFFFFF" data-color="FFFFFF"> </a>

-   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    id="rte-button-more" class="toolbar-trigger aui-dd-trigger aui-button"
    data-tooltip="More" data-resolved=""><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-styles">Formatting</span>
    <span
    class="icon aui-icon aui-icon-small aui-iconfont-dropdown"></span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        id="rte-strikethrough" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        Strikethrough</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#" id="rte-sub"
        class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        Subscript</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#" id="rte-sup"
        class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        Superscript</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        id="rte-monospace" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        Monospace</a>

    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        id="rte-removeformat" class="item-link">Clear formatting</a>

<!-- -->

-   <span id="rte-button-bullist"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    class="toolbar-trigger" data-control-id="bullist"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-list-bullet">Bullet
    list</span></a></span>
-   <span id="rte-button-numlist"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    class="toolbar-trigger" data-control-id="numlist"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-list-number">Numbered
    list</span></a></span>

<!-- -->

-   <span id="rte-button-tasklist"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    class="toolbar-trigger" data-control-id="tasklist"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-task">Task
    list</span></a></span>

<!-- -->

-   <span id="rte-button-outdent"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    class="toolbar-trigger" data-control-id="outdent"><span
    class="icon aui-icon aui-icon-small aui-iconfont-indent-left">Outdent</span></a></span>
-   <span id="rte-button-indent"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    class="toolbar-trigger" data-control-id="indent"><span
    class="icon aui-icon aui-icon-small aui-iconfont-indent-right">Indent</span></a></span>

<!-- -->

-   <span id="rte-button-justifyleft"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    class="toolbar-trigger" data-control-id="justifyleft"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-align-left">Align
    left</span></a></span>
-   <span id="rte-button-justifycenter"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    class="toolbar-trigger" data-control-id="justifycenter"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-align-center">Align
    center</span></a></span>
-   <span id="rte-button-justifyright"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    class="toolbar-trigger" data-control-id="justifyright"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-align-right">Align
    right</span></a></span>

<!-- -->

-   <span id="page-layout-2"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    id="rte-button-pagelayout-2"
    class="aui-button aui-button-subtle toolbar-trigger"
    data-resolved=""><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-layout">Page
    layout</span></a></span>

<!-- -->

<!-- -->

-   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    id="rte-button-link"
    class="toolbar-trigger aui-button aui-button-subtle"
    data-control-id="linkbrowserButton" aria-label="Insert link"
    data-resolved=""><span
    class="icon aui-icon aui-icon-small aui-iconfont-link"></span> <span
    class="trigger-text">Link</span></a>

<!-- -->

-   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    id="rte-button-insert-table"
    class="toolbar-trigger aui-dd-trigger aui-button aui-button-subtle"
    data-tooltip="Insert table" aria-label="Insert table"
    data-resolved=""><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-table"></span>
    <span class="dropdown-text">Table</span> <span
    class="icon aui-icon aui-icon-small aui-iconfont-dropdown"></span></a>

<!-- -->

-   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    id="rte-button-insert"
    class="toolbar-trigger aui-dd-trigger aui-button aui-button-subtle"
    data-tooltip="Insert more content" aria-label="Insert more content"
    data-resolved=""><span
    class="icon aui-icon aui-icon-small aui-iconfont-add"></span> <span
    class="dropdown-text">Insert</span> <span
    class="icon aui-icon aui-icon-small aui-iconfont-dropdown"></span></a>
    <span class="assistive">Insert content</span>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        id="rte-insert-image" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-image"></span> Files
        and images</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        id="rte-insert-link" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-link"></span> Link</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        id="rte-insert-wikimarkup" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-code"></span>
        Markup</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        id="rte-insert-hr" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-horizontal-rule"></span>
        Horizontal rule</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        id="rte-insert-tasklist" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-task"></span> Task
        list</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        id="rte-insert-date" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-calendar"></span>
        Date</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        id="rte-insert-emoticon" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-emoji"></span>
        Emoticon</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        id="rte-insert-symbol" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-symbol"></span>
        Symbol</a>

    <span class="assistive">Insert macro</span>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        id="insertmention-button" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-mention"></span> User
        mention</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#" id="jiralink"
        class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-jira"></span> Jira
        Issue/Filter</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#" id="info"
        class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-info-filled"></span>
        Info</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#" id="drawio"
        class="item-link"><span class="icon"></span> draw.io Diagram</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        id="inc-drawio" class="item-link"><span class="icon"></span> Embed
        draw.io Diagram</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        id="drawio-sketch" class="item-link"><span class="icon"></span> draw.io
        Board Diagram</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#" id="gliffy"
        class="item-link"><span class="icon"></span> Gliffy Diagram</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#" id="status"
        class="item-link"><span
        class="icon confluence-icon-status-macro"></span> Status</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#" id="gallery"
        class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-gallery"></span>
        Gallery</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#" id="toc"
        class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-overview"></span> Table
        of Contents</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        id="rest-forum" class="item-link"><span class="icon"></span> Forum</a>

    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        id="rte-insert-macro" class="item-link">Other macros</a>

<!-- -->

-   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    id="rte-button-pagelayout"
    class="toolbar-trigger aui-dd-trigger aui-button aui-button-subtle"
    data-tooltip="Page layout" data-resolved=""><span
    class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-default">Page
    layout</span> <span
    class="icon aui-icon aui-icon-small aui-iconfont-dropdown"></span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-none&quot;, &quot;columns&quot;: 0   }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-none">No
        layout</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-two-simple&quot;, &quot;columns&quot;: [&quot;&quot;, &quot;&quot;]   }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-two-simple">Two
        column (simple)</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-two-simple-left&quot;, &quot;columns&quot;: [&quot;aside&quot;, &quot;large&quot;]   }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-two-simple-left">Two
        column (simple, left sidebar)</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-two-simple-right&quot;, &quot;columns&quot;: [&quot;large&quot;, &quot;aside&quot;]   }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-two-simple-right">Two
        column (simple, right sidebar)</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-three-simple&quot;, &quot;columns&quot;: [&quot;&quot;, &quot;&quot;, &quot;&quot;]   }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-three-simple">Three
        column (simple)</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-two&quot;, &quot;columns&quot;: [&quot;&quot;, &quot;&quot;] , &quot;header&quot;: true  , &quot;footer&quot;:true  }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-two">Two
        column</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-two-left&quot;, &quot;columns&quot;: [&quot;aside&quot;, &quot;large&quot;] , &quot;header&quot;: true  , &quot;footer&quot;:true  }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-two-left">Two
        column (left sidebar)</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-two-right&quot;, &quot;columns&quot;: [&quot;large&quot;, &quot;aside&quot;] , &quot;header&quot;: true  , &quot;footer&quot;:true  }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-two-right">Two
        column (right sidebar)</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-three&quot;, &quot;columns&quot;: [&quot;&quot;, &quot;&quot;, &quot;&quot;] , &quot;header&quot;: true  , &quot;footer&quot;:true  }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-three">Three
        column</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-three-sidebars&quot;, &quot;columns&quot;: [&quot;sidebars&quot;, &quot;large&quot;, &quot;sidebars&quot;] , &quot;header&quot;: true  , &quot;footer&quot;:true  }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-three-sidebars">Three
        column (left and right sidebars)</span></a>

<!-- -->

-   <span id="rte-button-undo"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    class="toolbar-trigger" data-control-id="undo"><span
    class="icon aui-icon aui-icon-small aui-iconfont-undo">Undo</span></a></span>
-   <span id="rte-button-redo"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    class="toolbar-trigger" data-control-id="redo"><span
    class="icon aui-icon aui-icon-small aui-iconfont-redo">Redo</span></a></span>

-   <span id="rte-button-searchreplace"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    class="toolbar-trigger" data-control-id="searchreplace"><span
    class="icon aui-icon aui-icon-small aui-iconfont-search">Find/Replace</span></a></span>

<!-- -->

-   <span id="rte-button-help"><a href="https://wiki.rdkcentral.com/display/DOC/RDK+FAQ#"
    class="toolbar-trigger" data-control-id="help"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-help">Keyboard
    shortcuts help</span></a></span>

<span class="icon aui-icon aui-icon-small aui-iconfont-devtools-tag"></span>

<span class="icon aui-icon aui-icon-small aui-iconfont-unlocked"></span>

<span id="rte-spinner" class="toolbar-item"> </span>

<span class="trigger-text">Edit</span>

<span class="trigger-text">Preview</span>

<span class="trigger-text">Save</span>

Close