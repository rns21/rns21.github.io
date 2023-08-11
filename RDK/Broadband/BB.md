# **Try Out RDK-B**

# Raspberry Pi

RDK port for Raspberry Pi makes the RDK software stack available on a
popular hardware device. For more details, please follow below space.

  

## Build Setup Instructions

------------------------------------------------------------------------

### Setting up the Host Environment

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table tablesorter tablesorter-default"
data-ite-table-index="0" data-table-index="0" data-resolved=""
role="grid">
<thead>
<tr class="header tablesorter-headerRow" data-ite-row-number="0"
role="row">
<th
class="confluenceTh custom-row tablesorter-header sortableHeader tablesorter-headerUnSorted"
data-ite-col-number="0" data-row-index="0" data-column-index="0"
data-column="0" tabindex="0" scope="col" role="columnheader"
aria-disabled="false" data-unselectable="on" aria-sort="none"
aria-label="Requirement: No sort applied, activate to apply an ascending sort"
style="user-select: none"><div class="tablesorter-header-inner">
Requirement
</div></th>
<th
class="confluenceTh custom-row tablesorter-header sortableHeader tablesorter-headerUnSorted"
data-ite-col-number="1" data-row-index="0" data-column-index="1"
data-column="1" tabindex="0" scope="col" role="columnheader"
aria-disabled="false" data-unselectable="on" aria-sort="none"
aria-label="Yocto 3.1 LTS (Dunfell): No sort applied, activate to apply an ascending sort"
style="user-select: none"><div class="tablesorter-header-inner">
<strong>Yocto 3.1 LTS (Dunfell)</strong>
</div></th>
</tr>
</thead>
<tbody class="ui-sortable" aria-live="polite" aria-relevant="all">
<tr class="odd" data-ite-row-number="1" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="1" data-column-index="0"><p>Linux PC</p></td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="1" data-column-index="1"><p>64 bit Ubuntu 18.04 LTS</p>
<p>Precise supported distributions and versions are <a
href="https://www.yoctoproject.org/docs/3.1/ref-manual/ref-manual.html#detailed-supported-distros"
class="external-link" rel="nofollow">here</a></p></td>
</tr>
<tr class="even" data-ite-row-number="2" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="2" data-column-index="0"><p>Free HDD Space</p></td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="2" data-column-index="1"><p>Minimum 100GB Free memory
space</p></td>
</tr>
<tr class="odd" data-ite-row-number="3" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="3" data-column-index="0"><p>Host Tools version</p></td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="3" data-column-index="1"><p>Git 1.8.3.1 or greater</p>
<p>tar 1.24 or greater</p>
<p>Python 2.7.3</p></td>
</tr>
<tr class="even" data-ite-row-number="4" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="4" data-column-index="0">Raspberry Pi development
kit</td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="4" data-column-index="1"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="5" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="5" data-column-index="0">IPSTB Reference board</td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="5" data-column-index="1">Access to repositories hosting
code and binaries for reference board</td>
</tr>
<tr class="even" data-ite-row-number="6" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="6" data-column-index="0">Peripherals</td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="6" data-column-index="1">TV, Keyboard</td>
</tr>
</tbody>
</table>

## Environment

------------------------------------------------------------------------

### Host Setup

#### Install the following packages for setting up your host VM

The instructions provided below are meant to be executed via the command
line on an Ubuntu machine

  

**for yocto 3.1 (dunfell)**

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
class="sourceCode bash"><span class="co"># essential packages installation</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="co"># super user mode is required</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="co"># major essential packages</span></code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="fu">sudo</span></code> <code
class="sourceCode bash"><span class="ex">apt-get</span> </code><code
class="sourceCode bash"><span class="fu">install</span></code> <code
class="sourceCode bash"><span class="fu">gawk</span></code> <code
class="sourceCode bash"><span class="fu">wget</span> git-core diffstat unzip texinfo gcc-multilib g++-multilib build-essential chrpath socat bison curl cpio python3 python3-pip python3-pexpect xz-utils debianutils iputils-</code><code
class="sourceCode bash"><span class="fu">ping</span></code> <code
class="sourceCode bash"><span class="ex">python3-git</span> python3-jinja2 libegl1-mesa libsdl1.2-dev pylint3 xterm</code>
</div>
</div></td>
</tr>
</tbody>
</table>

#### Configure bash as default command interpreter for shell scripts

  

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
<code class="sourceCode bash"><span class="fu">sudo</span></code> <code
class="sourceCode bash"><span class="ex">dpkg-reconfigure</span> dash</code>
</div>
</div></td>
</tr>
</tbody>
</table>

Select “No”  
To choose bash, when the prompt asks if you want to use dash as the
default system shell - select “No”

#### Configure Git

Upgrade your Git version to 1.8.x or higher

Once git is installed, configure your name and email using the below
commands

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
class="sourceCode bash"><span class="co"># review your existing configuration</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="fu">git</span> config <span class="at">--list</span> <span class="at">--show-origin</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="co"># configure user name and email address</span></code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="fu">git</span> config <span class="at">--global</span> user.name </code><code
class="sourceCode bash"><span class="st">&quot;John Doe&quot;</span></code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="fu">git</span> config <span class="at">--global</span> user.email johndoe@example.com</code>
</div>
<div class="line number7 index6 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number8 index7 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="co"># configure git cookies. Needed for Gerrit to only contact the LDAP backend once.</span></code>
</div>
<div class="line number9 index8 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="fu">git</span> config <span class="at">--global</span> http.cookieFile </code><code
class="sourceCode bash"><span class="ex">/tmp/gitcookie</span></code><code
class="sourceCode bash"><span class="ex">.txt</span></code>
</div>
<div class="line number10 index9 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="fu">git</span> config <span class="at">--global</span> http.saveCookies </code><code
class="sourceCode bash"><span class="fu">true</span></code>
</div>
</div></td>
</tr>
</tbody>
</table>

#### Configure repo

In order to use Yocto build system, first you need to make sure that
repo is properly installed on the machine:

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
class="sourceCode bash"><span class="co"># create a bin directory</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code class="sourceCode bash"><span class="fu">mkdir</span></code> <code
class="sourceCode bash"><span class="ex">~</span></code><code
class="sourceCode bash"><span class="ex">/bin</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="bu">export</span></code>
<code
class="sourceCode bash"><span class="va">PATH</span><span class="op">=</span>~</code><code
class="sourceCode bash"><span class="ex">/bin</span></code><code
class="sourceCode bash"><span class="ex">:</span><span class="va">$PATH</span></code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="co"># Download the repo tool and ensure that it is executable</span></code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">curl http:</span></code><code
class="sourceCode bash"><span class="ex">//commondatastorage</span></code><code
class="sourceCode bash"><span class="ex">.googleapis.com</span></code><code
class="sourceCode bash"><span class="ex">/git-repo-downloads/repo</span></code> <code
class="sourceCode bash"><span class="op">&gt;</span> ~</code><code
class="sourceCode bash"><span class="ex">/bin/repo</span></code>
</div>
<div class="line number7 index6 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="fu">chmod</span></code> <code
class="sourceCode bash"><span class="ex">a+x</span> ~</code><code
class="sourceCode bash"><span class="ex">/bin/repo</span></code>
</div>
</div></td>
</tr>
</tbody>
</table>

 Credential configuration (Only for Amlogic reference board)

**\*Note**: it is also recommended to put credentials in .netrc when
interacting with the repo.

A sample .netrc file is illustrated below

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="1" data-table-index="1" data-resolved="">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="100"><p>machine<span> </span><a
href="http://code.rdkcentral.com/" class="external-link"
style="text-decoration: none;"
rel="nofollow">code.rdkcentral.com</a></p>
<p>    login &lt;YOUR_USERNAME&gt;</p>
<p>    password &lt;YOUR_PASSWORD&gt;</p></th>
</tr>
&#10;</tbody>
</table>

## <span style="color: black;">Build</span>

------------------------------------------------------------------------

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
 &#10;</div>
</div></td>
</tr>
</tbody>
</table>

  

  

### Yocto 2.2 - Morty's build environment and image build steps

  

**Morty RDK-B build Steps**

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
<code class="sourceCode bash"><span class="ex">$</span> </code><code
class="sourceCode bash"><span class="fu">mkdir</span></code> <code
class="sourceCode bash"><span class="op">&lt;</span>your <span class="ex">workspace</span> directory<span class="op">&gt;</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code class="sourceCode bash"><span class="ex">$</span> </code><code
class="sourceCode bash"><span class="bu">cd</span></code> <code
class="sourceCode bash"><span class="op">&lt;</span>your <span class="ex">workspace</span> directory<span class="op">&gt;</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">$</span> repo init <span class="at">-u</span> https:</code><code
class="sourceCode bash"><span class="ex">//code</span></code><code
class="sourceCode bash"><span class="ex">.rdkcentral.com</span></code><code
class="sourceCode bash"><span class="ex">/r/manifests</span></code>
<code
class="sourceCode bash"><span class="ex">-b</span> rdk-next <span class="at">-m</span> rdkb-extsrc.xml</code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">$</span> repo </code><code
class="sourceCode bash"><span class="fu">sync</span></code> <code
class="sourceCode bash"><span class="ex">-j4</span> <span class="at">--no-clone-bundle</span></code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="ex">$</span> </code><code
class="sourceCode bash"><span class="bu">source</span></code> <code
class="sourceCode bash"><span class="ex">meta-cmf-raspberrypi</span></code><code
class="sourceCode bash"><span class="ex">/setup-environment</span></code>
<code
class="sourceCode bash"><span class="kw">(</span><span class="ex">Select</span> option raspberrypi-rdk-broadband.conf<span class="kw">)</span></code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">$</span> bitbake rdk-generic-broadband-image</code>
</div>
</div></td>
</tr>
</tbody>
</table>

On Successful build, The kernel Image and root filesystem will be
created under the below
path, ~/<span style="color: rgb(23,43,77);">tmp/deploy/images/raspberrypi-rdk-broadband
folder</span>

  

### Yocto 3.1 - Dunfell's build environment and image build steps

#### For RPI 3B/3B+ Model Reference Platform:

**Dunfell RDK-B RPI 3B/3B+ build steps**

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
<code class="sourceCode bash"><span class="ex">$</span> </code><code
class="sourceCode bash"><span class="fu">mkdir</span></code> <code
class="sourceCode bash"><span class="op">&lt;</span>workspace </code><code
class="sourceCode bash"><span class="fu">dir</span></code><code
class="sourceCode bash"><span class="op">&gt;</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code class="sourceCode bash"><span class="ex">$</span> </code><code
class="sourceCode bash"><span class="bu">cd</span></code> <code
class="sourceCode bash"><span class="op">&lt;</span>workspace </code><code
class="sourceCode bash"><span class="fu">dir</span></code><code
class="sourceCode bash"><span class="op">&gt;</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">$</span> repo init <span class="at">-u</span> https:</code><code
class="sourceCode bash"><span class="ex">//code</span></code><code
class="sourceCode bash"><span class="ex">.rdkcentral.com</span></code><code
class="sourceCode bash"><span class="ex">/r/manifests</span></code>
<code
class="sourceCode bash"><span class="ex">-b</span> dunfell <span class="at">-m</span> rdkb-extsrc.xml</code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">$</span> repo </code><code
class="sourceCode bash"><span class="fu">sync</span></code> <code
class="sourceCode bash"><span class="ex">-j</span><span class="kw">`</span><span class="fu">nproc</span><span class="kw">`</span> <span class="at">--no-clone-bundle</span></code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">$</span> MACHINE=raspberrypi-rdk-broadband </code><code
class="sourceCode bash"><span class="bu">source</span></code> <code
class="sourceCode bash"><span class="ex">meta-cmf-raspberrypi</span></code><code
class="sourceCode bash"><span class="ex">/setup-environment</span></code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">$</span> bitbake rdk-generic-broadband-image</code>
</div>
</div></td>
</tr>
</tbody>
</table>

#### For RPI 4B Model Reference Platform:

**Dunfell RDK-BRPI 4B build steps**

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
<code class="sourceCode bash"><span class="ex">$</span> </code><code
class="sourceCode bash"><span class="fu">mkdir</span></code> <code
class="sourceCode bash"><span class="op">&lt;</span>workspace </code><code
class="sourceCode bash"><span class="fu">dir</span></code><code
class="sourceCode bash"><span class="op">&gt;</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code class="sourceCode bash"><span class="ex">$</span> </code><code
class="sourceCode bash"><span class="bu">cd</span></code> <code
class="sourceCode bash"><span class="op">&lt;</span>workspace </code><code
class="sourceCode bash"><span class="fu">dir</span></code><code
class="sourceCode bash"><span class="op">&gt;</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">$</span> repo init <span class="at">-u</span> https:</code><code
class="sourceCode bash"><span class="ex">//code</span></code><code
class="sourceCode bash"><span class="ex">.rdkcentral.com</span></code><code
class="sourceCode bash"><span class="ex">/r/manifests</span></code>
<code
class="sourceCode bash"><span class="ex">-b</span> dunfell <span class="at">-m</span> rdkb-extsrc.xml</code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">$</span> repo </code><code
class="sourceCode bash"><span class="fu">sync</span></code> <code
class="sourceCode bash"><span class="ex">-j</span><span class="kw">`</span><span class="fu">nproc</span><span class="kw">`</span> <span class="at">--no-clone-bundle</span></code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">$</span> MACHINE=raspberrypi4-rdk-broadband </code><code
class="sourceCode bash"><span class="bu">source</span></code> <code
class="sourceCode bash"><span class="ex">meta-cmf-raspberrypi</span></code><code
class="sourceCode bash"><span class="ex">/setup-environment</span></code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">$</span> bitbake rdk-generic-broadband-image</code>
</div>
</div></td>
</tr>
</tbody>
</table>

## <span class="toc-item-body">Flash image and bring up:</span>

------------------------------------------------------------------------

#### For RPI 3B/3B+ Model Reference Platform,  following command can be used to flash the RPI image to sd card using linux machine . dd tool should be available in linux

**RPI 3B/3B+ -rdk-b-flashing steps**

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
class="sourceCode bash"><span class="co"># Insert the micro SD card and mention the card&#39;s device file name</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="co"># input file (if) is the image file to flash and the output file (of) is the card&#39;s device file name</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="ex">$</span></code><code
class="sourceCode bash"><span class="fu">sudo</span></code> <code
class="sourceCode bash"><span class="fu">dd</span></code> <code
class="sourceCode bash"><span class="cf">if</span></code><code
class="sourceCode bash"><span class="ex">=</span><span class="op">&lt;</span>path to ImageName.Rpi-sdimg<span class="op">&gt;</span> of=<span class="op">&lt;</span>path to SD card space<span class="op">&gt;</span> bs=4M</code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code class="sourceCode bash"><span class="co">#Example:</span></code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="ex">$</span></code><code
class="sourceCode bash"><span class="fu">sudo</span></code> <code
class="sourceCode bash"><span class="fu">dd</span></code> <code
class="sourceCode bash"><span class="cf">if</span></code><code
class="sourceCode bash"><span class="ex">=rdk-generic-mediaclient-wpe-image.Rpi-sdimg</span> of=</code><code
class="sourceCode bash"><span class="ex">/dev/sdb</span></code> <code
class="sourceCode bash"><span class="va">bs</span><span class="op">=</span>4M</code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">149+0</span> records </code><code
class="sourceCode bash"><span class="er">in</span></code>
</div>
<div class="line number7 index6 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">149+0</span> records out</code>
</div>
<div class="line number8 index7 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">624951296</span> bytes <span class="er">(</span><span class="ex">625</span> MB<span class="kw">)</span> <span class="ex">copied,</span> 39.7752 s, 15.7 MB</code><code
class="sourceCode bash"><span class="ex">/s</span></code>
</div>
</div></td>
</tr>
</tbody>
</table>

------------------------------------------------------------------------

For Flashing the image using BalenaEtcher in windows follow below steps:

To flash the image on an SD card, you will need to download the
balenaEtcher
application-<a href="https://www.balena.io/etcher/" class="external-link"
rel="nofollow">https://www.balena.io/etcher/</a>   
*\*Note:<span style="color: rgb(23,43,77);"> </span>Prefer to use a 32GB
sd card and there should be a minimum of 12GB of free space available in
the device.* *Be sure to remove all other portable flash drives/hard
drives/SD cards from your computer before flashing the RDK image*

-   Open the application
-   Select the image from your download folder
-   Select the drive containing your SD card
-   Click “Flash” to copy the image onto the SD card

  

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./tryout_bb_files/flash-1.PNG"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211789969/flash-1.PNG?version=1&amp;modificationDate=1680190441000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396797"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="flash-1.PNG"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211789969"
data-linked-resource-container-version="6" height="250" /></span><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./tryout_bb_files/flash-2.PNG"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211789969/flash-2.PNG?version=1&amp;modificationDate=1680190442000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396798"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="flash-2.PNG"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211789969"
data-linked-resource-container-version="6" height="250" /></span>

------------------------------------------------------------------------

#### For RPI 4B Model Reference Platform, following command can be used to flash the RPI image to sd card using linux machine . bmap tool should be available in linux

**RPI 4B-rdk-b-flashing steps**

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
<code class="sourceCode bash"><span class="fu">bzip2</span></code> <code
class="sourceCode bash"><span class="ex">-d</span> <span class="op">&lt;</span>path to ImageName.wic.bz2<span class="op">&gt;</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code class="sourceCode bash"><span class="fu">sudo</span></code> <code
class="sourceCode bash"><span class="ex">-E</span> bmaptool copy <span class="at">--nobmap</span> <span class="op">&lt;</span>path to ImageName.wic<span class="op">&gt;</span> <span class="op">&lt;</span>path to SD card space<span class="op">&gt;</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="ex"> </span></code> 
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code class="sourceCode bash"><span class="ex">Example:</span></code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="ex"> </span></code> 
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code class="sourceCode bash"><span class="ex">$</span> </code><code
class="sourceCode bash"><span class="fu">bzip2</span></code> <code
class="sourceCode bash"><span class="ex">-d</span> rdk-generic-broadband-image-raspberrypi-rdk-broadband.wic.bz2</code>
</div>
<div class="line number7 index6 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="ex">$</span> </code><code
class="sourceCode bash"><span class="fu">sudo</span></code> <code
class="sourceCode bash"><span class="ex">-E</span> bmaptool copy <span class="at">--nobmap</span> rdk-generic-broadband-image-raspberrypi-rdk-broadband.wic </code><code
class="sourceCode bash"><span class="ex">/dev/sdb</span></code>
</div>
</div></td>
</tr>
</tbody>
</table>

### System Setup:

------------------------------------------------------------------------

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./tryout_bb_files/RDK-B-rpi-systemSetup.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211789969/RDK-B-rpi-systemSetup.png?version=1&amp;modificationDate=1680190622000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396799"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="RDK-B-rpi-systemSetup.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211789969"
data-linked-resource-container-version="6" width="590" /></span>

1.  Connect TV/Monitor to HDMI Video Output.

2.  Connect Ethernet cable to ETH port.
    1.  The other end of the Ethernet cable should be connected to the
        network where DHCP server is running so that the Raspberry Pi
        device gets assigned an IP address on boot-up.
    2.  Connectivity to Internet is required so that the client
        connected can access the internet via RDK-B gateway.

3.  Connect USB-Ethernet adapter to one of the USB slots present in
    Raspberry Pi.

4.  <span style="letter-spacing: 0.0px;">Connect Ethernet cable from
    USB-Ethernet adapter to the client device/machine.</span>

5.  <span style="letter-spacing: 0.0px;">Insert the SD card into Micro
    SD Card Slot.</span>

6.  <span style="letter-spacing: 0.0px;">Connect Power cable to Micro
    USB power Input.</span>

      

-   Type “root” when the login prompt is displayed
-   Run following in the terminal  
    \#  ifconfig
-   Check the interface shown for USB-Ethernet adapter. e.g eth1, eth2
    ... so on

<!-- -->

-   In case you are running in Ethernet mode, add interface of
    USB-Ethernet adapter in file “/etc/utopia/system\_defaults. Change
    lan\_ethernet\_physical\_ifnames. It will be your lan side.  
        e.g:lan\_ethernet\_physical\_ifnames=eth1
-   Reboot the Raspberry Pi

  

### WebUI

------------------------------------------------------------------------

WebUI can be accessed by both the LAN clients and from the WAN Side.

-   For LAN Clients:
    -   Open an internet browser on the Lan client/machine.
    -   Give the following url in the browser window:
        -   From LAN
            Side:<a href="http://10.0.0.1from/" class="external-link"
            rel="nofollow">http://10.0.0.1</a>-if we use LAN ip
            (10.0.0.1) then it opens captive portal page

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./tryout_bb_files/CaptivePortal-RDKBImage.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211789969/CaptivePortal-RDKBImage.png?version=1&amp;modificationDate=1680190712000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396800"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="CaptivePortal-RDKBImage.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211789969"
data-linked-resource-container-version="6" height="250" /></span>

-   -   -   From WAN Side:
            -   http://&lt;WAN IP Address of Raspberry Pi&gt;:8080
            -   For e.g
                <a href="http://10.213.51.122:8080/" class="external-link"
                rel="nofollow">http://10.213.51.122:8080</a>
            -   if you use erouter0 IP, then it opens admin page

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./tryout_bb_files/adminImage.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211789969/adminImage.png?version=1&amp;modificationDate=1680190712000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396801"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="adminImage.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211789969"
data-linked-resource-container-version="6" height="400" /></span>

  

  

  

# Emulator

The RDK emulator is an x86 based implementation of the RDK software
stack that runs on desktop computers. For more details, please follow
the below space.

  

## Build Setup Instructions

------------------------------------------------------------------------

### Setting up the Host Environment

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table tablesorter tablesorter-default"
data-ite-table-index="2" data-table-index="2" data-resolved=""
role="grid">
<thead>
<tr class="header tablesorter-headerRow" data-ite-row-number="0"
role="row">
<th
class="confluenceTh custom-row tablesorter-header sortableHeader tablesorter-headerUnSorted"
data-ite-col-number="0" data-row-index="0" data-column-index="200"
data-column="0" tabindex="0" scope="col" role="columnheader"
aria-disabled="false" data-unselectable="on" aria-sort="none"
aria-label="Requirement: No sort applied, activate to apply an ascending sort"
style="user-select: none"><div class="tablesorter-header-inner">
Requirement
</div></th>
<th
class="confluenceTh custom-row tablesorter-header sortableHeader tablesorter-headerUnSorted"
data-ite-col-number="1" data-row-index="0" data-column-index="201"
data-column="1" tabindex="0" scope="col" role="columnheader"
aria-disabled="false" data-unselectable="on" aria-sort="none"
aria-label="Yocto 3.1 LTS (Dunfell): No sort applied, activate to apply an ascending sort"
style="user-select: none"><div class="tablesorter-header-inner">
<strong>Yocto 3.1 LTS (Dunfell)</strong>
</div></th>
</tr>
</thead>
<tbody class="ui-sortable" aria-live="polite" aria-relevant="all">
<tr class="odd" data-ite-row-number="1" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="1" data-column-index="200"><p>Linux PC</p></td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="1" data-column-index="201"><p>64 bit Ubuntu 18.04
LTS</p>
<p>Precise supported distributions and versions are <a
href="https://www.yoctoproject.org/docs/3.1/ref-manual/ref-manual.html#detailed-supported-distros"
class="external-link" rel="nofollow">here</a></p></td>
</tr>
<tr class="even" data-ite-row-number="2" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="2" data-column-index="200"><p>Free HDD Space</p></td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="2" data-column-index="201"><p>Minimum 100GB Free memory
space</p></td>
</tr>
<tr class="odd" data-ite-row-number="3" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="3" data-column-index="200"><p>Host Tools
version</p></td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="3" data-column-index="201"><p>Git 1.8.3.1 or greater</p>
<p>tar 1.24 or greater</p>
<p>Python 2.7.3</p></td>
</tr>
<tr class="even" data-ite-row-number="4" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="4" data-column-index="200">Raspberry Pi development
kit</td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="4" data-column-index="201"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="5" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="5" data-column-index="200">IPSTB Reference board</td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="5" data-column-index="201">Access to repositories
hosting code and binaries for reference board</td>
</tr>
<tr class="even" data-ite-row-number="6" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="6" data-column-index="200">Peripherals</td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="6" data-column-index="201">TV, Keyboard</td>
</tr>
</tbody>
</table>

## <span style="color: black;">Environment</span>

------------------------------------------------------------------------

### Host Setup

#### Install the following packages for setting up your host VM

The instructions provided below are meant to be executed via the command
line on an Ubuntu machine

  

**for yocto 3.1 (dunfell)**

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
class="sourceCode bash"><span class="co"># essential packages installation</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="co"># super user mode is required</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="co"># major essential packages</span></code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="fu">sudo</span></code> <code
class="sourceCode bash"><span class="ex">apt-get</span> </code><code
class="sourceCode bash"><span class="fu">install</span></code> <code
class="sourceCode bash"><span class="fu">gawk</span></code> <code
class="sourceCode bash"><span class="fu">wget</span> git-core diffstat unzip texinfo gcc-multilib g++-multilib build-essential chrpath socat bison curl cpio python3 python3-pip python3-pexpect xz-utils debianutils iputils-</code><code
class="sourceCode bash"><span class="fu">ping</span></code> <code
class="sourceCode bash"><span class="ex">python3-git</span> python3-jinja2 libegl1-mesa libsdl1.2-dev pylint3 xterm</code>
</div>
</div></td>
</tr>
</tbody>
</table>

#### Configure bash as default command interpreter for shell scripts

  

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
<code class="sourceCode bash"><span class="fu">sudo</span></code> <code
class="sourceCode bash"><span class="ex">dpkg-reconfigure</span> dash</code>
</div>
</div></td>
</tr>
</tbody>
</table>

Select “No”  
To choose bash, when the prompt asks if you want to use dash as the
default system shell - select “No”

#### Configure Git

Upgrade your Git version to 1.8.x or higher

Once git is installed, configure your name and email using the below
commands

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
class="sourceCode bash"><span class="co"># review your existing configuration</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="fu">git</span> config <span class="at">--list</span> <span class="at">--show-origin</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="co"># configure user name and email address</span></code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="fu">git</span> config <span class="at">--global</span> user.name </code><code
class="sourceCode bash"><span class="st">&quot;John Doe&quot;</span></code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="fu">git</span> config <span class="at">--global</span> user.email johndoe@example.com</code>
</div>
<div class="line number7 index6 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number8 index7 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="co"># configure git cookies. Needed for Gerrit to only contact the LDAP backend once.</span></code>
</div>
<div class="line number9 index8 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="fu">git</span> config <span class="at">--global</span> http.cookieFile </code><code
class="sourceCode bash"><span class="ex">/tmp/gitcookie</span></code><code
class="sourceCode bash"><span class="ex">.txt</span></code>
</div>
<div class="line number10 index9 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="fu">git</span> config <span class="at">--global</span> http.saveCookies </code><code
class="sourceCode bash"><span class="fu">true</span></code>
</div>
</div></td>
</tr>
</tbody>
</table>

#### Configure repo

In order to use Yocto build system, first you need to make sure that
repo is properly installed on the machine:

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
class="sourceCode bash"><span class="co"># create a bin directory</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code class="sourceCode bash"><span class="fu">mkdir</span></code> <code
class="sourceCode bash"><span class="ex">~</span></code><code
class="sourceCode bash"><span class="ex">/bin</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="bu">export</span></code>
<code
class="sourceCode bash"><span class="va">PATH</span><span class="op">=</span>~</code><code
class="sourceCode bash"><span class="ex">/bin</span></code><code
class="sourceCode bash"><span class="ex">:</span><span class="va">$PATH</span></code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="co"># Download the repo tool and ensure that it is executable</span></code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">curl http:</span></code><code
class="sourceCode bash"><span class="ex">//commondatastorage</span></code><code
class="sourceCode bash"><span class="ex">.googleapis.com</span></code><code
class="sourceCode bash"><span class="ex">/git-repo-downloads/repo</span></code> <code
class="sourceCode bash"><span class="op">&gt;</span> ~</code><code
class="sourceCode bash"><span class="ex">/bin/repo</span></code>
</div>
<div class="line number7 index6 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="fu">chmod</span></code> <code
class="sourceCode bash"><span class="ex">a+x</span> ~</code><code
class="sourceCode bash"><span class="ex">/bin/repo</span></code>
</div>
</div></td>
</tr>
</tbody>
</table>

 Credential configuration (Only for Amlogic reference board)

**\*Note**: it is also recommended to put credentials in .netrc when
interacting with the repo.

A sample .netrc file is illustrated below

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="3" data-table-index="3" data-resolved="">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="300"><p>machine<span> </span><a
href="http://code.rdkcentral.com/" class="external-link" rel="nofollow"
style="text-decoration: none;">code.rdkcentral.com</a></p>
<p>    login &lt;YOUR_USERNAME&gt;</p>
<p>    password &lt;YOUR_PASSWORD&gt;</p></th>
</tr>
&#10;</tbody>
</table>

## <span style="color: black;">Build</span>

------------------------------------------------------------------------

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
class="sourceCode java"># initialize the manifest with repo tool</code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code
class="sourceCode java">repo init <span class="op">-</span>u https<span class="op">:</span></code><code
class="sourceCode java"><span class="co">//code.rdkcentral.com/r/manifests -m rdkb-extsrc.xml -b dunfell</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code
class="sourceCode java">repo sync <span class="op">-</span>j4 <span class="op">--</span>no<span class="op">-</span>clone<span class="op">-</span>bundle</code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code
class="sourceCode java">MACHINE<span class="op">=</span>qemux86broadband source meta<span class="op">-</span>cmf<span class="op">/</span>setup<span class="op">-</span>environment</code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode java">bitbake rdk<span class="op">-</span>generic<span class="op">-</span>broadband<span class="op">-</span>image</code>
</div>
</div></td>
</tr>
</tbody>
</table>

## <span style="color: black;">Flash image and bring up</span>

------------------------------------------------------------------------

### Host Requirements:

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table tablesorter tablesorter-default"
data-ite-table-index="4" data-table-index="4" data-resolved=""
role="grid">
<thead>
<tr class="header tablesorter-headerRow" data-ite-row-number="0"
role="row">
<th
class="confluenceTh custom-row tablesorter-header sortableHeader tablesorter-headerUnSorted"
data-ite-col-number="0" data-row-index="0" data-column-index="400"
data-column="0" tabindex="0" scope="col" role="columnheader"
aria-disabled="false" data-unselectable="on" aria-sort="none"
aria-label="Requirement: No sort applied, activate to apply an ascending sort"
style="user-select: none"><div class="tablesorter-header-inner">
Requirement
</div></th>
<th
class="confluenceTh custom-row tablesorter-header sortableHeader tablesorter-headerUnSorted"
data-ite-col-number="1" data-row-index="0" data-column-index="401"
data-column="1" tabindex="0" scope="col" role="columnheader"
aria-disabled="false" data-unselectable="on" aria-sort="none"
aria-label="Remarks: No sort applied, activate to apply an ascending sort"
style="user-select: none"><div class="tablesorter-header-inner">
Remarks
</div></th>
</tr>
</thead>
<tbody class="ui-sortable" aria-live="polite" aria-relevant="all">
<tr class="odd" data-ite-row-number="1" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="1" data-column-index="400"><span>Linux              
            </span></td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="1" data-column-index="401"><span>32/64 bit Ubuntu 16.04
operating system</span></td>
</tr>
<tr class="even" data-ite-row-number="2" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="2" data-column-index="400"><span>Free HDD
Space</span></td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="2" data-column-index="401"><span>Minimum 100GB Free
Memory</span></td>
</tr>
<tr class="odd" data-ite-row-number="3" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="3" data-column-index="400"><span>Oracle Virtual
Box</span></td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="3" data-column-index="401"><span>4.3.18 or
higher</span></td>
</tr>
</tbody>
</table>

Install Virtual Box and follow the following steps to bring up RDK
Emulator on Virtual Box:

In the following steps, it is recommended to review the description and
screenshot completely before proceeding with steps.

### STEP 1: Create your new VM Instance:

-   Open Virtualbox → Select New \[A popup will come up\]→ Select Type
    as ‘Linux’→ Select Version as ‘Other Linux (32 Bit)’→ Click on
    “Next”
-   Choose a Memory Size of 512 MB

**       
 <span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./tryout_bb_files/image2021-11-22_12-47-29.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211789969/image2021-11-22_12-47-29.png?version=1&amp;modificationDate=1680189272000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396783"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2021-11-22_12-47-29.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211789969"
data-linked-resource-container-version="6" height="400" /></span>**

**         
 <span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./tryout_bb_files/image2021-11-22_12-49-15.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211789969/image2021-11-22_12-49-15.png?version=1&amp;modificationDate=1680189272000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396784"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2021-11-22_12-49-15.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211789969"
data-linked-resource-container-version="6" height="400" /></span>  
**

-   Use an existing virtual hard drive file which would be your newly
    built image in \*.vmdk format and create your VM:

         
 <span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./tryout_bb_files/image2021-11-22_12-51-18.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211789969/image2021-11-22_12-51-18.png?version=1&amp;modificationDate=1680189272000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396785"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2021-11-22_12-51-18.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211789969"
data-linked-resource-container-version="6" height="400" /></span>

### STEP 2: Configure your new VM Instance:

-   Click on “Settings” tab to configure your new VM instance

         
<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./tryout_bb_files/image2021-11-22_12-53-18.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211789969/image2021-11-22_12-53-18.png?version=1&amp;modificationDate=1680189272000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396786"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2021-11-22_12-53-18.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211789969"
data-linked-resource-container-version="6" height="400" /></span>

-   Configure your VMs network settings
-   Choose “Bridged Adapter” mode as shown in the screenshot below

**       
<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./tryout_bb_files/image2021-12-6_14-58-38.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211789969/image2021-12-6_14-58-38.png?version=1&amp;modificationDate=1680189272000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396787"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2021-12-6_14-58-38.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211789969"
data-linked-resource-container-version="6" height="400" /></span>**

### STEP 3: Run Emulator in Vbox :

-   Boot up your VM by clicking on start

-   Click “start” to launch the Emulator vmdk image

-    Provide “root” to login Emulator as shown in the screen shot

-    Emulator usually fetches IP address by default,i.e "ifconfig
    erouter0"

-    If not then assign statically using the commands.

-    For ex: ifconfig eth0/erouter0 192.168.1.49

-    route add default gw 192.168.1.1 eth0/erouter0

-    Once IP address for Emulator is up, Emulator shall be accessed in
    the Host PC using the below command

Once you have the IP address you may SSH into your VM from your linux
shell console. Use root as the ssh user.

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="5" data-table-index="5" data-resolved="">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="500"><p>$ ssh <a
href="mailto:root@x.x.x.x" class="external-link"
rel="nofollow">root@</a>&lt;erouter0 ip&gt;</p></th>
</tr>
&#10;</tbody>
</table>

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
 &#10;</div>
</div></td>
</tr>
</tbody>
</table>

### **STEP 4: Lanching Emulator in WebUI :**

-   In the Host-PC Browser, Enter the eth0/erouter0 IP:8080 to get
    WebUI  
    Ex:<a href="http://192.168.1.4:8080/" class="external-link"
    rel="nofollow">http://192.168.1.49:8080</a>

-   WebUI Login Credential's  
    Username: admin  
    Password: password

#### Launching WebUI App:

------------------------------------------------------------------------

  

-   In the Host-PC Browser, Enter the eth0 /erouter0 IP:8080 to get
    WebUI

    Ex: <a href="http://192.168.1.4:8080/" class="external-link"
    rel="nofollow">http://192.168.1.49:808</a>

-   WebUI Login Credential's

    Username: admin

    Password: password

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./tryout_bb_files/image2021-11-24_12-8-16.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211789969/image2021-11-24_12-8-16.png?version=1&amp;modificationDate=1680189272000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396788"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2021-11-24_12-8-16.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211789969"
data-linked-resource-container-version="6" height="400" /></span>

### RDK-B Environment Setup

------------------------------------------------------------------------

  

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./tryout_bb_files/image2021-11-22_13-13-53.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211789969/image2021-11-22_13-13-53.png?version=1&amp;modificationDate=1680189273000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396789"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2021-11-22_13-13-53.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211789969"
data-linked-resource-container-version="6" height="400" /></span>

  

  

  

# Turris Omnia

Turris Omnia is a home router. With powerful hardware, Turris Omnia can
handle gigabit traffic and still be able to do much more. We can use it
as a home server, NAS, printserver and it even has a virtual server
built-in

  

## <span class="toc-item-body">Build Setup Instructions</span>

------------------------------------------------------------------------

<span style="color: rgb(0,51,102);">Upgrading Yocto version from morty
to dunfell(Yocto 3.1) for Turris Omnia Reference Platform</span>

<span style="color: rgb(0,51,102);">Considerations for broadband &
extender build:</span>

-   <span style="color: rgb(0,51,102);">OpenEmbedded and Yocto:
    Dunfell</span>
-   <span style="color: rgb(0,51,102);">Linux kernel 4.14</span>
-   <span style="color: rgb(0,51,102);">Version upgrades for bitbake and
    other oe recipes(if needed).</span>

### Setting up the Host Environment:

Pre-Requisites

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table tablesorter tablesorter-default"
data-ite-table-index="6" data-table-index="6" data-resolved=""
role="grid">
<thead>
<tr class="header tablesorter-headerRow" data-ite-row-number="0"
role="row">
<th
class="confluenceTh custom-row tablesorter-header sortableHeader tablesorter-headerUnSorted"
style="text-align: center; user-select: none;" data-ite-col-number="0"
data-row-index="0" data-column-index="600" data-column="0" tabindex="0"
scope="col" role="columnheader" aria-disabled="false"
data-unselectable="on" aria-sort="none"
aria-label="Requirement: No sort applied, activate to apply an ascending sort"><div
class="tablesorter-header-inner">
<p><span>Requirement</span></p>
</div></th>
<th
class="confluenceTh custom-row tablesorter-header sortableHeader tablesorter-headerUnSorted"
style="text-align: center; user-select: none;" data-ite-col-number="1"
data-row-index="0" data-column-index="601" data-column="1" tabindex="0"
scope="col" role="columnheader" aria-disabled="false"
data-unselectable="on" aria-sort="none"
aria-label="Yocto 3.1 LTS (Dunfell): No sort applied, activate to apply an ascending sort"><div
class="tablesorter-header-inner">
<p>Yocto 3.1 LTS (Dunfell)</p>
</div></th>
</tr>
</thead>
<tbody class="ui-sortable" aria-live="polite" aria-relevant="all">
<tr class="odd" data-ite-row-number="1" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="1"
data-column-index="600"><p><span>Linux</span></p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="1" data-column-index="601"><p>64
bit Ubuntu 18.04 LTS</p>
<p>Precise supported distributions and versions are<span> </span><a
href="https://www.yoctoproject.org/docs/3.1/ref-manual/ref-manual.html#detailed-supported-distros"
class="external-link" rel="nofollow">here</a></p></td>
</tr>
<tr class="even" data-ite-row-number="2" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="2"
data-column-index="600"><p><span>Free HDD Space</span></p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="2"
data-column-index="601">Minimum 100GB Free memory space</td>
</tr>
<tr class="odd" data-ite-row-number="3" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="3"
data-column-index="600"><p><span>Oracle Virtual Box</span></p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="3"
data-column-index="601">-</td>
</tr>
<tr class="even" data-ite-row-number="4" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="4"
data-column-index="600"><p><span>Wireless Adapter</span></p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="4"
data-column-index="601">-</td>
</tr>
<tr class="odd" data-ite-row-number="5" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="5"
data-column-index="600"><p><span>USB to Ethernet Switch</span></p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="5"
data-column-index="601"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="6" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="6" data-column-index="600">Host
Tools version</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="6" data-column-index="601"><ul>
<li><p>Git 1.8.3.1 or greater</p></li>
<li><p>tar 1.28 or greater</p></li>
<li><p>Python 3.5.0 or greater</p></li>
<li>Coreutils</li>
</ul></td>
</tr>
</tbody>
</table>

## Environment

------------------------------------------------------------------------

### Install the following packages for setting up your host VM

The instructions provided below are meant to be executed via the command
line on an Ubuntu machine

**for yocto 3.1 (dunfell)**

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
class="sourceCode bash"><span class="co"># essential packages installation</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="co"># super user mode is required</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="co"># major essential packages</span></code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="ex">$</span> </code><code
class="sourceCode bash"><span class="fu">sudo</span></code> <code
class="sourceCode bash"><span class="ex">apt-get</span> </code><code
class="sourceCode bash"><span class="fu">install</span></code> <code
class="sourceCode bash"><span class="fu">gawk</span></code> <code
class="sourceCode bash"><span class="fu">wget</span> git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat cpio python python3 python3-pip python3-pexpect xz-utils debianutils iputils-</code><code
class="sourceCode bash"><span class="fu">ping</span></code> <code
class="sourceCode bash"><span class="ex">python3-git</span> python3-jinja2 libegl1-mesa libsdl1.2-dev pylint3 xterm</code>
</div>
</div></td>
</tr>
</tbody>
</table>

### Configure bash as default command interpreter for shell scripts

  

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
<code class="sourceCode bash"><span class="fu">sudo</span></code> <code
class="sourceCode bash"><span class="ex">dpkg-reconfigure</span> dash</code>
</div>
</div></td>
</tr>
</tbody>
</table>

Select “No”  
To choose bash, when the prompt asks if you want to use dash as the
default system shell - select “No”

### Configure Git

Upgrade your Git version to 1.8.x or higher

On Ubuntu 16.04 LTS, if you are unable to upgrade your git version using
apt-get, then follow the below steps in order to upgrade 

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
<code class="sourceCode bash"><span class="fu">sudo</span></code> <code
class="sourceCode bash"><span class="ex">apt-get</span> </code><code
class="sourceCode bash"><span class="fu">install</span></code> <code
class="sourceCode bash"><span class="ex">software-properties-common</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code class="sourceCode bash"><span class="fu">sudo</span></code> <code
class="sourceCode bash"><span class="ex">add-apt-repository</span> ppa:git-core</code><code
class="sourceCode bash"><span class="ex">/ppa</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="fu">sudo</span></code> <code
class="sourceCode bash"><span class="ex">apt-get</span> update</code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code class="sourceCode bash"><span class="fu">sudo</span></code> <code
class="sourceCode bash"><span class="ex">apt-get</span> </code><code
class="sourceCode bash"><span class="fu">install</span></code> <code
class="sourceCode bash"><span class="fu">git</span></code>
</div>
</div></td>
</tr>
</tbody>
</table>

Once git is installed, configure your name and email using the below
commands

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
class="sourceCode bash"><span class="co"># review your existing configuration</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="fu">git</span> config <span class="at">--list</span> <span class="at">--show-origin</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="co"># configure user name and email address</span></code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="fu">git</span> config <span class="at">--global</span> user.name </code><code
class="sourceCode bash"><span class="st">&quot;John Doe&quot;</span></code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="fu">git</span> config <span class="at">--global</span> user.email johndoe@example.com</code>
</div>
<div class="line number7 index6 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number8 index7 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="co"># configure git cookies. Needed for Gerrit to only contact the LDAP backend once.</span></code>
</div>
<div class="line number9 index8 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="fu">git</span> config <span class="at">--global</span> http.cookieFile </code><code
class="sourceCode bash"><span class="ex">/tmp/gitcookie</span></code><code
class="sourceCode bash"><span class="ex">.txt</span></code>
</div>
<div class="line number10 index9 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="fu">git</span> config <span class="at">--global</span> http.saveCookies </code><code
class="sourceCode bash"><span class="fu">true</span></code>
</div>
</div></td>
</tr>
</tbody>
</table>

### Configure repo

In order to use Yocto build system, first you need to make sure that
repo is properly installed on the machine:

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
class="sourceCode bash"><span class="co"># create a bin directory</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code class="sourceCode bash"><span class="fu">mkdir</span></code> <code
class="sourceCode bash"><span class="ex">~</span></code><code
class="sourceCode bash"><span class="ex">/bin</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="bu">export</span></code>
<code
class="sourceCode bash"><span class="va">PATH</span><span class="op">=</span>~</code><code
class="sourceCode bash"><span class="ex">/bin</span></code><code
class="sourceCode bash"><span class="ex">:</span><span class="va">$PATH</span></code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="co"># Download the repo tool and ensure that it is executable</span></code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">curl http:</span></code><code
class="sourceCode bash"><span class="ex">//commondatastorage</span></code><code
class="sourceCode bash"><span class="ex">.googleapis.com</span></code><code
class="sourceCode bash"><span class="ex">/git-repo-downloads/repo</span></code> <code
class="sourceCode bash"><span class="op">&gt;</span> ~</code><code
class="sourceCode bash"><span class="ex">/bin/repo</span></code>
</div>
<div class="line number7 index6 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="fu">chmod</span></code> <code
class="sourceCode bash"><span class="ex">a+x</span> ~</code><code
class="sourceCode bash"><span class="ex">/bin/repo</span></code>
</div>
</div></td>
</tr>
</tbody>
</table>

### Credential configuration

**Note**: it is also recommended to put credentials in .netrc when
interacting with the repo.

A sample .netrc file is illustrated below

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="7" data-table-index="7" data-resolved="">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="700"><p>machine<span> </span><a
href="http://code.rdkcentral.com/" class="external-link"
style="text-decoration: none;"
rel="nofollow">code.rdkcentral.com</a></p>
<p>    login &lt;YOUR_USERNAME&gt;</p>
<p>    password &lt;YOUR_PASSWORD&gt;</p></th>
</tr>
&#10;</tbody>
</table>

## Build

------------------------------------------------------------------------

### Build instructions for creating rdk-generic-broadband-image

<span style="color: rgb(51,51,0);">The following commands fetches the
source code of turris using repo tool and create the image using
bitbake</span>

  

<span class="aui-icon aui-icon-small aui-iconfont-warning confluence-information-macro-icon">
</span>

*<span style="color: rgb(0,0,128);">Note: Cloning the code before login
once to </span><a
href="https://slack-redir.net/link?url=http%3A%2F%2Fcode.rdkcentral.com"
class="external-link" style="text-decoration: none;"
rel="nofollow">code.rdkcentral.com</a><span style="color: rgb(0,0,128);">,
user would get the Authentication error, even though the account is in
good standing and has all the required access. Please login to </span><a
href="https://slack-redir.net/link?url=http%3A%2F%2Fcode.rdkcentral.com"
class="external-link" style="text-decoration: none;"
rel="nofollow">code.rdkcentral.com</a><span style="color: rgb(0,0,128);"> before
attempting to clone.</span>*

OpenSync backhaul credential

<span class="aui-icon aui-icon-small aui-iconfont-info confluence-information-macro-icon">
</span>

<span style="color: rgb(51,51,51);">Please get patch(service.patch) for
meta-turris layer from Plume to apply backhaul credential(SSID:PSK).
Please check </span><a
href="https://wiki.rdkcentral.com/display/RDK/WiFi+Extender+with+Turris+Omnia+Reference+Platform+-+Cloud+Access+Guide"
rel="nofollow">Cloud Access Guide</a><span style="color: rgb(51,51,51);"> for
more details.</span>

**With External Source**

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
class="sourceCode bash"><span class="co">#Create workspace directory</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code class="sourceCode bash"><span class="fu">mkdir</span></code> <code
class="sourceCode bash"><span class="op">&lt;</span>workspace </code><code
class="sourceCode bash"><span class="fu">dir</span></code><code
class="sourceCode bash"><span class="op">&gt;</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="bu">cd</span></code> <code
class="sourceCode bash"><span class="op">&lt;</span>workspace </code><code
class="sourceCode bash"><span class="fu">dir</span></code><code
class="sourceCode bash"><span class="op">&gt;</span></code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">repo</span> init <span class="at">-u</span> https:</code><code
class="sourceCode bash"><span class="ex">//code</span></code><code
class="sourceCode bash"><span class="ex">.rdkcentral.com</span></code><code
class="sourceCode bash"><span class="ex">/r/manifests</span></code>
<code
class="sourceCode bash"><span class="ex">-m</span> rdkb-turris-pod-extsrc.xml <span class="at">-b</span> dunfell</code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code class="sourceCode bash"><span class="ex">repo</span> </code><code
class="sourceCode bash"><span class="fu">sync</span></code> <code
class="sourceCode bash"><span class="ex">-j4</span> <span class="at">--no-clone-bundle</span></code>
</div>
<div class="line number7 index6 alt2" data-bidi-marker="true">
<code class="sourceCode bash"><span class="bu">cd</span></code> <code
class="sourceCode bash"><span class="ex">meta-turris</span> <span class="kw">&amp;&amp;</span> <span class="fu">git</span> apply service.patch <span class="kw">&amp;&amp;</span> </code><code
class="sourceCode bash"><span class="bu">cd</span></code> <code
class="sourceCode bash"><span class="ex">../</span></code>
</div>
<div class="line number8 index7 alt1" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="va">MACHINE</span><span class="op">=</span>turris-extender </code><code
class="sourceCode bash"><span class="bu">source</span></code> <code
class="sourceCode bash"><span class="ex">meta-turris</span></code><code
class="sourceCode bash"><span class="ex">/setup-environment</span></code>
<code
class="sourceCode bash"><span class="ex">build-turris-ext</span></code>
</div>
<div class="line number9 index8 alt2" data-bidi-marker="true">
<code
class="sourceCode bash"><span class="ex">bitbake</span> rdk-generic-extender-image</code>
</div>
</div></td>
</tr>
</tbody>
</table>

  

<span style="color: rgb(23,43,77);">Note: The kernel Image and root
filesystem will be placed under &lt;workspace
dir&gt;/build-turris-ext/tmp/deploy/images/turris-extender
director</span>

  

## <span class="toc-item-body">Flash image and bring up:</span>

------------------------------------------------------------------------

### Flashing:

#### Requirements:

Two files are required to bring up Newer model of Turris Omnia (*Turris
Omnia 2019* & *Turris Omnia 2020*)\[`Revision: CZ11NIC23`\]

-   Omnia Medkit image : <a
    href="https://wiki.rdkcentral.com/download/attachments/222365236/omnia-medkit-openwrt-mvebu-cortexa9-cznic_turris-omnia-initramfs_autoupgrade.tar.gz?version=1&amp;modificationDate=1667977447000&amp;api=v2"
    data-linked-resource-id="226370808" data-linked-resource-version="1"
    data-linked-resource-type="attachment"
    data-linked-resource-default-alias="omnia-medkit-openwrt-mvebu-cortexa9-cznic_turris-omnia-initramfs_autoupgrade.tar.gz"
    data-linked-resource-content-type="application/x-gzip"
    data-linked-resource-container-id="222365236"
    data-linked-resource-container-version="31">omnia-medkit-openwrt-mvebu-cortexa9-cznic_turris-omnia-initramfs_autoupgrade.tar.gz</a>

<!-- -->

-   Compressed WIC image(`Example:`
    `rdkb-generic-broadband-image_default_20200809095738.rootfs.wic.*` )
    coming out of [Image
    build](https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#TryOutRDKB-Imagebuild)
    . Extract \*.wic.gz or \*.wic.bz2 image and rename to
    sysupgrade.img. For example,

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
class="sourceCode java">gunzip rdkb<span class="op">-</span>generic<span class="op">-</span>broadband<span class="op">-</span>image_default_<span class="op">*.</span><span class="fu">rootfs</span><span class="op">.</span><span class="fu">wic</span><span class="op">.</span><span class="fu">gz</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code
class="sourceCode java"><span class="op">(</span>or<span class="op">)</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code
class="sourceCode java">bzip2 <span class="op">-</span>d rdkb<span class="op">-</span>generic<span class="op">-</span>broadband<span class="op">-</span>image_default_<span class="op">*.</span><span class="fu">rootfs</span><span class="op">.</span><span class="fu">wic</span><span class="op">.</span><span class="fu">bz2</span></code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode java">mv rdkb<span class="op">-</span>generic<span class="op">-</span>broadband<span class="op">-</span>image_default_<span class="op">*.</span><span class="fu">rootfs</span><span class="op">.</span><span class="fu">wic</span> sysupgrade<span class="op">.</span><span class="fu">img</span></code>
</div>
</div></td>
</tr>
</tbody>
</table>

### Flashing Steps

------------------------------------------------------------------------

#### Flashing with Medkit & Sysupgrade images

<u>*NOTE* :</u> This upgrade procedure wipes out eMMC flash
storage(*/dev/mmcblk0*) completely. Earlier partitions are lost.

Perform following steps to flash New Turris Omnia with RDKB image.

-   Connect a USB flash drive to PC that is running Linux. Create a
    partition in flash drive and format the partition with **mkfs.ext2**

-   Copy both attached *medkit image* and *sysupgrade.img* image to USB
    flash drive.

-   Disconnect other USB devices from the Turris Omnia and connect the
    flash drive to either USB port.

-   Hold down the reset button (backside, bottom centre) and plug in the
    power cord. Wait until the fourth LED lights up (green), then
    release (before the 5th LED lights up). Please check
    <a href="https://docs.turris.cz/hw/omnia/rescue_modes/"
    class="external-link" rel="nofollow">here</a> to see more detail on
    rescue modes.

-   Wait approximately 2 minutes for the Turris Omnia to flash itself
    with the temporary image, during which LEDs will change multiple
    times.

#### Creating additional partitions

Create partitions for additional rootfs and nvram. Then, reboot the
system.

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
<code class="sourceCode java">root</code><code
class="sourceCode java"><span class="at">@TurrisOmnia</span></code><code
class="sourceCode java"><span class="op">-</span>GW<span class="op">:~</span># fdisk <span class="op">/</span>dev<span class="op">/</span>mmcblk0</code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Welcome to <span class="fu">fdisk</span> <span class="op">(</span>util<span class="op">-</span>linux </code><code
class="sourceCode java"><span class="fl">2.28</span></code><code
class="sourceCode java"><span class="op">.</span></code><code
class="sourceCode java"><span class="dv">1</span></code><code
class="sourceCode java">)<span class="op">.</span></code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code
class="sourceCode java">Changes will remain in memory only<span class="op">,</span> until you decide to write them<span class="op">.</span></code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Be careful before using the write command<span class="op">.</span></code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number7 index6 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number8 index7 alt1" data-bidi-marker="true">
<code
class="sourceCode java"><span class="fu">Command</span> <span class="op">(</span>m </code><code
class="sourceCode java"><span class="cf">for</span></code> <code
class="sourceCode java">help)<span class="op">:</span> p</code>
</div>
<div class="line number9 index8 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Disk <span class="op">/</span>dev<span class="op">/</span>mmcblk0<span class="op">:</span> </code><code
class="sourceCode java"><span class="fl">7.3</span></code> <code
class="sourceCode java">GiB<span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">7818182656</span></code> <code
class="sourceCode java">bytes<span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">15269888</span></code> <code
class="sourceCode java">sectors</code>
</div>
<div class="line number10 index9 alt1" data-bidi-marker="true">
<code
class="sourceCode java">Units<span class="op">:</span> sectors of </code><code
class="sourceCode java"><span class="dv">1</span></code> <code
class="sourceCode java"><span class="op">*</span> </code><code
class="sourceCode java"><span class="dv">512</span></code> <code
class="sourceCode java"><span class="op">=</span> </code><code
class="sourceCode java"><span class="dv">512</span></code> <code
class="sourceCode java">bytes</code>
</div>
<div class="line number11 index10 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Sector <span class="fu">size</span> <span class="op">(</span>logical<span class="op">/</span>physical<span class="op">):</span> </code><code
class="sourceCode java"><span class="dv">512</span></code> <code
class="sourceCode java">bytes <span class="op">/</span> </code><code
class="sourceCode java"><span class="dv">512</span></code> <code
class="sourceCode java">bytes</code>
</div>
<div class="line number12 index11 alt1" data-bidi-marker="true">
<code
class="sourceCode java">I<span class="op">/</span>O <span class="fu">size</span> <span class="op">(</span>minimum<span class="op">/</span>optimal<span class="op">):</span> </code><code
class="sourceCode java"><span class="dv">512</span></code> <code
class="sourceCode java">bytes <span class="op">/</span> </code><code
class="sourceCode java"><span class="dv">512</span></code> <code
class="sourceCode java">bytes</code>
</div>
<div class="line number13 index12 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Disklabel type<span class="op">:</span> dos</code>
</div>
<div class="line number14 index13 alt1" data-bidi-marker="true">
<code
class="sourceCode java">Disk identifier<span class="op">:</span> </code><code
class="sourceCode java"><span class="bn">0xec7ceddc</span></code>
</div>
<div class="line number15 index14 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number16 index15 alt1" data-bidi-marker="true">
<code
class="sourceCode java">Device         Boot Start    End Sectors   Size Id <span class="bu">Type</span></code>
</div>
<div class="line number17 index16 alt2" data-bidi-marker="true">
<code
class="sourceCode java"><span class="op">/</span>dev<span class="op">/</span>mmcblk0p1 <span class="op">*</span>     </code><code
class="sourceCode java"><span class="dv">2048</span></code>  <code
class="sourceCode java"><span class="dv">34623</span></code>   <code
class="sourceCode java"><span class="dv">32576</span></code>  <code
class="sourceCode java"><span class="dv">15</span></code><code
class="sourceCode java"><span class="fl">.9</span>M  c W95 <span class="fu">FAT32</span> <span class="op">(</span>LBA<span class="op">)</span></code>
</div>
<div class="line number18 index17 alt1" data-bidi-marker="true">
<code
class="sourceCode java"><span class="op">/</span>dev<span class="op">/</span>mmcblk0p2      </code><code
class="sourceCode java"><span class="dv">34816</span></code> <code
class="sourceCode java"><span class="dv">755359</span></code>  <code
class="sourceCode java"><span class="dv">720544</span></code> <code
class="sourceCode java"><span class="dv">351</span></code><code
class="sourceCode java"><span class="fl">.8</span>M </code><code
class="sourceCode java"><span class="dv">83</span></code> <code
class="sourceCode java">Linux</code>
</div>
<div class="line number19 index18 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number20 index19 alt1" data-bidi-marker="true">
<code
class="sourceCode java"><span class="fu">Command</span> <span class="op">(</span>m </code><code
class="sourceCode java"><span class="cf">for</span></code> <code
class="sourceCode java">help)<span class="op">:</span> n</code>
</div>
<div class="line number21 index20 alt2" data-bidi-marker="true">
<code class="sourceCode java">Partition type</code>
</div>
<div class="line number22 index21 alt1" data-bidi-marker="true">
<code class="sourceCode java">   </code><code
class="sourceCode java">p   <span class="fu">primary</span> <span class="op">(</span></code><code
class="sourceCode java"><span class="dv">2</span></code> <code
class="sourceCode java">primary<span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">extended<span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">2</span></code> <code
class="sourceCode java">free)</code>
</div>
<div class="line number23 index22 alt2" data-bidi-marker="true">
<code class="sourceCode java">   </code><code
class="sourceCode java">e   <span class="fu">extended</span> <span class="op">(</span>container </code><code
class="sourceCode java"><span class="cf">for</span></code> <code
class="sourceCode java">logical partitions)</code>
</div>
<div class="line number24 index23 alt1" data-bidi-marker="true">
<code
class="sourceCode java"><span class="fu">Select</span> <span class="op">(</span></code><code
class="sourceCode java"><span class="kw">default</span></code> <code
class="sourceCode java">p)<span class="op">:</span> </code>
</div>
<div class="line number25 index24 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number26 index25 alt1" data-bidi-marker="true">
<code class="sourceCode java">Using </code><code
class="sourceCode java"><span class="kw">default</span></code> <code
class="sourceCode java">response p<span class="op">.</span></code>
</div>
<div class="line number27 index26 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Partition <span class="fu">number</span> <span class="op">(</span></code><code
class="sourceCode java"><span class="dv">3</span></code><code
class="sourceCode java"><span class="op">,</span></code><code
class="sourceCode java"><span class="dv">4</span></code><code
class="sourceCode java"><span class="op">,</span> </code><code
class="sourceCode java"><span class="kw">default</span></code> <code
class="sourceCode java"><span class="dv">3</span></code><code
class="sourceCode java">)<span class="op">:</span> </code>
</div>
<div class="line number28 index27 alt1" data-bidi-marker="true">
<code
class="sourceCode java">First <span class="fu">sector</span> <span class="op">(</span></code><code
class="sourceCode java"><span class="dv">34624</span></code><code
class="sourceCode java"><span class="op">-</span></code><code
class="sourceCode java"><span class="dv">15269887</span></code><code
class="sourceCode java"><span class="op">,</span> </code><code
class="sourceCode java"><span class="kw">default</span></code> <code
class="sourceCode java"><span class="dv">755712</span></code><code
class="sourceCode java">)<span class="op">:</span> </code>
</div>
<div class="line number29 index28 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Last sector<span class="op">,</span> <span class="op">+</span>sectors or <span class="op">+</span>size<span class="op">{</span>K<span class="op">,</span>M<span class="op">,</span>G<span class="op">,</span>T<span class="op">,</span>P<span class="op">}</span> <span class="op">(</span></code><code
class="sourceCode java"><span class="dv">755712</span></code><code
class="sourceCode java"><span class="op">-</span></code><code
class="sourceCode java"><span class="dv">15269887</span></code><code
class="sourceCode java"><span class="op">,</span> </code><code
class="sourceCode java"><span class="kw">default</span></code> <code
class="sourceCode java"><span class="dv">15269887</span></code><code
class="sourceCode java">)<span class="op">:</span> <span class="op">+</span><span class="er">512</span>M</code>
</div>
<div class="line number30 index29 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number31 index30 alt2" data-bidi-marker="true">
<code class="sourceCode java">Created a </code><code
class="sourceCode java"><span class="kw">new</span></code> <code
class="sourceCode java">partition </code><code
class="sourceCode java"><span class="dv">3</span></code> <code
class="sourceCode java">of type </code><code
class="sourceCode java"><span class="er">&#39;</span>Linux<span class="er">&#39;</span></code>
<code class="sourceCode java">and of size </code><code
class="sourceCode java"><span class="dv">512</span></code> <code
class="sourceCode java">MiB<span class="op">.</span></code>
</div>
<div class="line number32 index31 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number33 index32 alt2" data-bidi-marker="true">
<code
class="sourceCode java"><span class="fu">Command</span> <span class="op">(</span>m </code><code
class="sourceCode java"><span class="cf">for</span></code> <code
class="sourceCode java">help)<span class="op">:</span> n</code>
</div>
<div class="line number34 index33 alt1" data-bidi-marker="true">
<code class="sourceCode java">Partition type</code>
</div>
<div class="line number35 index34 alt2" data-bidi-marker="true">
<code class="sourceCode java">   </code><code
class="sourceCode java">p   <span class="fu">primary</span> <span class="op">(</span></code><code
class="sourceCode java"><span class="dv">3</span></code> <code
class="sourceCode java">primary<span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">extended<span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">1</span></code> <code
class="sourceCode java">free)</code>
</div>
<div class="line number36 index35 alt1" data-bidi-marker="true">
<code class="sourceCode java">   </code><code
class="sourceCode java">e   <span class="fu">extended</span> <span class="op">(</span>container </code><code
class="sourceCode java"><span class="cf">for</span></code> <code
class="sourceCode java">logical partitions)</code>
</div>
<div class="line number37 index36 alt2" data-bidi-marker="true">
<code
class="sourceCode java"><span class="fu">Select</span> <span class="op">(</span></code><code
class="sourceCode java"><span class="kw">default</span></code> <code
class="sourceCode java">e)<span class="op">:</span> </code>
</div>
<div class="line number38 index37 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number39 index38 alt2" data-bidi-marker="true">
<code class="sourceCode java">Using </code><code
class="sourceCode java"><span class="kw">default</span></code> <code
class="sourceCode java">response e<span class="op">.</span></code>
</div>
<div class="line number40 index39 alt1" data-bidi-marker="true">
<code class="sourceCode java">Selected partition </code><code
class="sourceCode java"><span class="dv">4</span></code>
</div>
<div class="line number41 index40 alt2" data-bidi-marker="true">
<code
class="sourceCode java">First <span class="fu">sector</span> <span class="op">(</span></code><code
class="sourceCode java"><span class="dv">34624</span></code><code
class="sourceCode java"><span class="op">-</span></code><code
class="sourceCode java"><span class="dv">15269887</span></code><code
class="sourceCode java"><span class="op">,</span> </code><code
class="sourceCode java"><span class="kw">default</span></code> <code
class="sourceCode java"><span class="dv">1804288</span></code><code
class="sourceCode java">)<span class="op">:</span> </code>
</div>
<div class="line number42 index41 alt1" data-bidi-marker="true">
<code
class="sourceCode java">Last sector<span class="op">,</span> <span class="op">+</span>sectors or <span class="op">+</span>size<span class="op">{</span>K<span class="op">,</span>M<span class="op">,</span>G<span class="op">,</span>T<span class="op">,</span>P<span class="op">}</span> <span class="op">(</span></code><code
class="sourceCode java"><span class="dv">1804288</span></code><code
class="sourceCode java"><span class="op">-</span></code><code
class="sourceCode java"><span class="dv">15269887</span></code><code
class="sourceCode java"><span class="op">,</span> </code><code
class="sourceCode java"><span class="kw">default</span></code> <code
class="sourceCode java"><span class="dv">15269887</span></code><code
class="sourceCode java">)<span class="op">:</span> </code>
</div>
<div class="line number43 index42 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number44 index43 alt1" data-bidi-marker="true">
<code class="sourceCode java">Created a </code><code
class="sourceCode java"><span class="kw">new</span></code> <code
class="sourceCode java">partition </code><code
class="sourceCode java"><span class="dv">4</span></code> <code
class="sourceCode java">of type </code><code
class="sourceCode java"><span class="er">&#39;</span>Extended<span class="er">&#39;</span></code>
<code class="sourceCode java">and of size </code><code
class="sourceCode java"><span class="fl">6.4</span></code> <code
class="sourceCode java">GiB<span class="op">.</span></code>
</div>
<div class="line number45 index44 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number46 index45 alt1" data-bidi-marker="true">
<code
class="sourceCode java"><span class="fu">Command</span> <span class="op">(</span>m </code><code
class="sourceCode java"><span class="cf">for</span></code> <code
class="sourceCode java">help)<span class="op">:</span> n</code>
</div>
<div class="line number47 index46 alt2" data-bidi-marker="true">
<code
class="sourceCode java">All primary partitions are in use<span class="op">.</span></code>
</div>
<div class="line number48 index47 alt1" data-bidi-marker="true">
<code class="sourceCode java">Adding logical partition </code><code
class="sourceCode java"><span class="dv">5</span></code>
</div>
<div class="line number49 index48 alt2" data-bidi-marker="true">
<code
class="sourceCode java">First <span class="fu">sector</span> <span class="op">(</span></code><code
class="sourceCode java"><span class="dv">1806336</span></code><code
class="sourceCode java"><span class="op">-</span></code><code
class="sourceCode java"><span class="dv">15269887</span></code><code
class="sourceCode java"><span class="op">,</span> </code><code
class="sourceCode java"><span class="kw">default</span></code> <code
class="sourceCode java"><span class="dv">1806336</span></code><code
class="sourceCode java">)<span class="op">:</span> </code>
</div>
<div class="line number50 index49 alt1" data-bidi-marker="true">
<code
class="sourceCode java">Last sector<span class="op">,</span> <span class="op">+</span>sectors or <span class="op">+</span>size<span class="op">{</span>K<span class="op">,</span>M<span class="op">,</span>G<span class="op">,</span>T<span class="op">,</span>P<span class="op">}</span> <span class="op">(</span></code><code
class="sourceCode java"><span class="dv">1806336</span></code><code
class="sourceCode java"><span class="op">-</span></code><code
class="sourceCode java"><span class="dv">15269887</span></code><code
class="sourceCode java"><span class="op">,</span> </code><code
class="sourceCode java"><span class="kw">default</span></code> <code
class="sourceCode java"><span class="dv">15269887</span></code><code
class="sourceCode java">)<span class="op">:</span> <span class="op">+</span><span class="er">128</span>M</code>
</div>
<div class="line number51 index50 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number52 index51 alt1" data-bidi-marker="true">
<code class="sourceCode java">Created a </code><code
class="sourceCode java"><span class="kw">new</span></code> <code
class="sourceCode java">partition </code><code
class="sourceCode java"><span class="dv">5</span></code> <code
class="sourceCode java">of type </code><code
class="sourceCode java"><span class="er">&#39;</span>Linux<span class="er">&#39;</span></code>
<code class="sourceCode java">and of size </code><code
class="sourceCode java"><span class="dv">128</span></code> <code
class="sourceCode java">MiB<span class="op">.</span></code>
</div>
<div class="line number53 index52 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number54 index53 alt1" data-bidi-marker="true">
<code
class="sourceCode java"><span class="fu">Command</span> <span class="op">(</span>m </code><code
class="sourceCode java"><span class="cf">for</span></code> <code
class="sourceCode java">help)<span class="op">:</span> p</code>
</div>
<div class="line number55 index54 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Disk <span class="op">/</span>dev<span class="op">/</span>mmcblk0<span class="op">:</span> </code><code
class="sourceCode java"><span class="fl">7.3</span></code> <code
class="sourceCode java">GiB<span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">7818182656</span></code> <code
class="sourceCode java">bytes<span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">15269888</span></code> <code
class="sourceCode java">sectors</code>
</div>
<div class="line number56 index55 alt1" data-bidi-marker="true">
<code
class="sourceCode java">Units<span class="op">:</span> sectors of </code><code
class="sourceCode java"><span class="dv">1</span></code> <code
class="sourceCode java"><span class="op">*</span> </code><code
class="sourceCode java"><span class="dv">512</span></code> <code
class="sourceCode java"><span class="op">=</span> </code><code
class="sourceCode java"><span class="dv">512</span></code> <code
class="sourceCode java">bytes</code>
</div>
<div class="line number57 index56 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Sector <span class="fu">size</span> <span class="op">(</span>logical<span class="op">/</span>physical<span class="op">):</span> </code><code
class="sourceCode java"><span class="dv">512</span></code> <code
class="sourceCode java">bytes <span class="op">/</span> </code><code
class="sourceCode java"><span class="dv">512</span></code> <code
class="sourceCode java">bytes</code>
</div>
<div class="line number58 index57 alt1" data-bidi-marker="true">
<code
class="sourceCode java">I<span class="op">/</span>O <span class="fu">size</span> <span class="op">(</span>minimum<span class="op">/</span>optimal<span class="op">):</span> </code><code
class="sourceCode java"><span class="dv">512</span></code> <code
class="sourceCode java">bytes <span class="op">/</span> </code><code
class="sourceCode java"><span class="dv">512</span></code> <code
class="sourceCode java">bytes</code>
</div>
<div class="line number59 index58 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Disklabel type<span class="op">:</span> dos</code>
</div>
<div class="line number60 index59 alt1" data-bidi-marker="true">
<code
class="sourceCode java">Disk identifier<span class="op">:</span> </code><code
class="sourceCode java"><span class="bn">0xec7ceddc</span></code>
</div>
<div class="line number61 index60 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number62 index61 alt1" data-bidi-marker="true">
<code
class="sourceCode java">Device         Boot   Start      End  Sectors   Size Id <span class="bu">Type</span></code>
</div>
<div class="line number63 index62 alt2" data-bidi-marker="true">
<code
class="sourceCode java"><span class="op">/</span>dev<span class="op">/</span>mmcblk0p1 <span class="op">*</span>       </code><code
class="sourceCode java"><span class="dv">2048</span></code>    <code
class="sourceCode java"><span class="dv">34623</span></code>    <code
class="sourceCode java"><span class="dv">32576</span></code>  <code
class="sourceCode java"><span class="dv">15</span></code><code
class="sourceCode java"><span class="fl">.9</span>M  c W95 <span class="fu">FAT32</span> <span class="op">(</span>LBA<span class="op">)</span></code>
</div>
<div class="line number64 index63 alt1" data-bidi-marker="true">
<code
class="sourceCode java"><span class="op">/</span>dev<span class="op">/</span>mmcblk0p2        </code><code
class="sourceCode java"><span class="dv">34816</span></code>   <code
class="sourceCode java"><span class="dv">755359</span></code>   <code
class="sourceCode java"><span class="dv">720544</span></code> <code
class="sourceCode java"><span class="dv">351</span></code><code
class="sourceCode java"><span class="fl">.8</span>M </code><code
class="sourceCode java"><span class="dv">83</span></code> <code
class="sourceCode java">Linux</code>
</div>
<div class="line number65 index64 alt2" data-bidi-marker="true">
<code
class="sourceCode java"><span class="op">/</span>dev<span class="op">/</span>mmcblk0p3       </code><code
class="sourceCode java"><span class="dv">755712</span></code>  <code
class="sourceCode java"><span class="dv">1804287</span></code>  <code
class="sourceCode java"><span class="dv">1048576</span></code>   <code
class="sourceCode java"><span class="er">512</span>M </code><code
class="sourceCode java"><span class="dv">83</span></code> <code
class="sourceCode java">Linux</code>
</div>
<div class="line number66 index65 alt1" data-bidi-marker="true">
<code
class="sourceCode java"><span class="op">/</span>dev<span class="op">/</span>mmcblk0p4      </code><code
class="sourceCode java"><span class="dv">1804288</span></code> <code
class="sourceCode java"><span class="dv">15269887</span></code> <code
class="sourceCode java"><span class="dv">13465600</span></code>   <code
class="sourceCode java"><span class="dv">6</span></code><code
class="sourceCode java"><span class="fl">.4</span>G  </code><code
class="sourceCode java"><span class="dv">5</span></code> <code
class="sourceCode java">Extended</code>
</div>
<div class="line number67 index66 alt2" data-bidi-marker="true">
<code
class="sourceCode java"><span class="op">/</span>dev<span class="op">/</span>mmcblk0p5      </code><code
class="sourceCode java"><span class="dv">1806336</span></code>  <code
class="sourceCode java"><span class="dv">2068479</span></code>   <code
class="sourceCode java"><span class="dv">262144</span></code>   <code
class="sourceCode java"><span class="er">128</span>M </code><code
class="sourceCode java"><span class="dv">83</span></code> <code
class="sourceCode java">Linux</code>
</div>
<div class="line number68 index67 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number69 index68 alt2" data-bidi-marker="true">
<code
class="sourceCode java"><span class="fu">Command</span> <span class="op">(</span>m </code><code
class="sourceCode java"><span class="cf">for</span></code> <code
class="sourceCode java">help)<span class="op">:</span> w</code>
</div>
<div class="line number70 index69 alt1" data-bidi-marker="true">
<code
class="sourceCode java">The partition table has been altered<span class="op">.</span></code>
</div>
<div class="line number71 index70 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Calling <span class="fu">ioctl</span><span class="op">()</span> to re<span class="op">-</span>read partition table<span class="op">.</span></code>
</div>
<div class="line number72 index71 alt1" data-bidi-marker="true">
<code
class="sourceCode java">Re<span class="op">-</span>reading the partition table failed<span class="op">.:</span> Device or resource busy</code>
</div>
<div class="line number73 index72 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number74 index73 alt1" data-bidi-marker="true">
<code
class="sourceCode java">The kernel still uses the old table<span class="op">.</span> <span class="fu">The</span> </code><code
class="sourceCode java"><span class="kw">new</span></code> <code
class="sourceCode java">table will be used at the next reboot or after you run <span class="fu">partprobe</span><span class="op">(</span></code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java">) or <span class="fu">kpartx</span><span class="op">(</span></code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java">)<span class="op">.</span></code>
</div>
<div class="line number75 index74 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number76 index75 alt1" data-bidi-marker="true">
<code class="sourceCode java">root</code><code
class="sourceCode java"><span class="at">@TurrisOmnia</span></code><code
class="sourceCode java"><span class="op">-</span>GW<span class="op">:~</span># reboot</code>
</div>
</div></td>
</tr>
</tbody>
</table>

  

Format newly created two partitions as **ext2** partitions**.**

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
<code class="sourceCode java">root</code><code
class="sourceCode java"><span class="at">@TurrisOmnia</span></code><code
class="sourceCode java"><span class="op">-</span>GW<span class="op">:~</span># mkfs<span class="op">.</span><span class="fu">ext2</span>  <span class="op">/</span>dev<span class="op">/</span>mmcblk0p3</code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code class="sourceCode java">mke2fs </code><code
class="sourceCode java"><span class="fl">1.43</span></code> <code
class="sourceCode java"><span class="op">(</span></code><code
class="sourceCode java"><span class="dv">17</span></code><code
class="sourceCode java"><span class="op">-</span>May<span class="op">-</span></code><code
class="sourceCode java"><span class="dv">2016</span></code><code
class="sourceCode java">)</code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Discarding device blocks<span class="op">:</span> done                            </code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code class="sourceCode java">Creating filesystem with </code><code
class="sourceCode java"><span class="dv">131072</span></code> <code
class="sourceCode java"><span class="dv">4</span>k blocks and </code><code
class="sourceCode java"><span class="dv">32768</span></code> <code
class="sourceCode java">inodes</code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Filesystem <span class="bu">UUID</span><span class="op">:</span> c2d8887f<span class="op">-</span><span class="dv">6</span>e6b<span class="op">-</span><span class="dv">4</span>d9b<span class="op">-</span>b57a<span class="op">-</span>f3bc28374841</code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code
class="sourceCode java">Superblock backups stored on blocks<span class="op">:</span> </code>
</div>
<div class="line number7 index6 alt2" data-bidi-marker="true">
<code class="sourceCode java">    </code><code
class="sourceCode java"><span class="dv">32768</span></code><code
class="sourceCode java"><span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">98304</span></code>
</div>
<div class="line number8 index7 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number9 index8 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Allocating group tables<span class="op">:</span> done                            </code>
</div>
<div class="line number10 index9 alt1" data-bidi-marker="true">
<code
class="sourceCode java">Writing inode tables<span class="op">:</span> done                            </code>
</div>
<div class="line number11 index10 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Writing superblocks and filesystem accounting information<span class="op">:</span> done</code>
</div>
<div class="line number12 index11 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number13 index12 alt2" data-bidi-marker="true">
<code class="sourceCode java">root</code><code
class="sourceCode java"><span class="at">@TurrisOmnia</span></code><code
class="sourceCode java"><span class="op">-</span>GW<span class="op">:~</span># mkfs<span class="op">.</span><span class="fu">ext2</span>  <span class="op">/</span>dev<span class="op">/</span>mmcblk0p5</code>
</div>
<div class="line number14 index13 alt1" data-bidi-marker="true">
<code class="sourceCode java">mke2fs </code><code
class="sourceCode java"><span class="fl">1.43</span></code> <code
class="sourceCode java"><span class="op">(</span></code><code
class="sourceCode java"><span class="dv">17</span></code><code
class="sourceCode java"><span class="op">-</span>May<span class="op">-</span></code><code
class="sourceCode java"><span class="dv">2016</span></code><code
class="sourceCode java">)</code>
</div>
<div class="line number15 index14 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Discarding device blocks<span class="op">:</span> done                            </code>
</div>
<div class="line number16 index15 alt1" data-bidi-marker="true">
<code class="sourceCode java">Creating filesystem with </code><code
class="sourceCode java"><span class="dv">131072</span></code> <code
class="sourceCode java"><span class="dv">1</span>k blocks and </code><code
class="sourceCode java"><span class="dv">32768</span></code> <code
class="sourceCode java">inodes</code>
</div>
<div class="line number17 index16 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Filesystem <span class="bu">UUID</span><span class="op">:</span> <span class="dv">2</span>e4cee8d<span class="op">-</span>f1d5<span class="op">-</span><span class="er">488</span>a<span class="op">-</span><span class="er">99</span>f9<span class="op">-</span><span class="dv">5</span>e3a233dcf4f</code>
</div>
<div class="line number18 index17 alt1" data-bidi-marker="true">
<code
class="sourceCode java">Superblock backups stored on blocks<span class="op">:</span> </code>
</div>
<div class="line number19 index18 alt2" data-bidi-marker="true">
<code class="sourceCode java">    </code><code
class="sourceCode java"><span class="dv">8193</span></code><code
class="sourceCode java"><span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">24577</span></code><code
class="sourceCode java"><span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">40961</span></code><code
class="sourceCode java"><span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">57345</span></code><code
class="sourceCode java"><span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">73729</span></code>
</div>
<div class="line number20 index19 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number21 index20 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Allocating group tables<span class="op">:</span> done                            </code>
</div>
<div class="line number22 index21 alt1" data-bidi-marker="true">
<code
class="sourceCode java">Writing inode tables<span class="op">:</span> done                            </code>
</div>
<div class="line number23 index22 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Writing superblocks and filesystem accounting information<span class="op">:</span> done</code>
</div>
</div></td>
</tr>
</tbody>
</table>

### RDK Firmware(Image) upgrade** **

------------------------------------------------------------------------

Firmware upgrade is done with multiple approaches.

#### Approach 2(Quick):** **

This is the quickest and main method of Turris image upgradation.

Copy zImage , dtb file and rootfs files(*not \*dbg\* rootfs file*) from
PC or VM to /tmp/ directory of Turris Omnia which runs RDK Image.

For example:

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
class="sourceCode java">scp zImage<span class="op">--</span></code><code
class="sourceCode java"><span class="fl">4.14</span></code><code
class="sourceCode java"><span class="op">.</span></code><code
class="sourceCode java"><span class="dv">22</span></code><code
class="sourceCode java"><span class="op">-</span>r0<span class="op">-</span>turris<span class="op">-</span></code><code
class="sourceCode java"><span class="dv">20200720105910</span></code><code
class="sourceCode java"><span class="op">.</span><span class="fu">bin</span> root<span class="at">@</span><span class="op">&lt;</span>TurrisOmnia<span class="op">-</span>IP<span class="op">&gt;:/</span>tmp<span class="op">/</span></code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code
class="sourceCode java">scp armada<span class="op">-</span></code><code
class="sourceCode java"><span class="dv">385</span></code><code
class="sourceCode java"><span class="op">-</span>turris<span class="op">-</span>omnia<span class="op">.</span><span class="fu">dtb</span> root<span class="at">@</span><span class="op">&lt;</span>TurrisOmnia<span class="op">-</span>IP<span class="op">&gt;:/</span>tmp<span class="op">/</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code
class="sourceCode java">scp rdkb<span class="op">-</span>generic<span class="op">-</span>broadband<span class="op">-</span>image_default_20200720105910<span class="op">.</span><span class="fu">rootfs</span><span class="op">.</span><span class="fu">tar</span><span class="op">.</span><span class="fu">gz</span> root<span class="at">@</span><span class="op">&lt;</span>TurrisOmnia<span class="op">-</span>IP<span class="op">&gt;:/</span>tmp<span class="op">/</span></code>
</div>
</div></td>
</tr>
</tbody>
</table>

  

In Turris Omnia, execute */lib/rdk/TurrisFwUpgrade.sh*  to flash new RDK
image present in /tmp folder

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
class="sourceCode java">sh <span class="op">/</span>lib<span class="op">/</span>rdk<span class="op">/</span>TurrisFwUpgrade<span class="op">.</span><span class="fu">sh</span></code>
</div>
</div></td>
</tr>
</tbody>
</table>

Turris Omnia will now run upgraded version of Yocto based RDK image.

There are other 2 approaches :

-   "<a
    href="https://wiki.rdkcentral.com/display/RDK/Firmware+upgrade+through+XCONF+server+-+Turris-Omnia+-++User+Manual+-+2020+-+M6"
    rel="nofollow">approach 1 - RDK firmware upgrade with XConf server</a>"
    and
-   "<a
    href="https://wiki.rdkcentral.com/pages/viewpage.action?pageId=114986660"
    rel="nofollow">approach 3 - Fallback to OpenWrt OS</a> " . Note: I*f
    any issues faced with approach 2 ,please refer "Approach 3" -
    Fallback to OpenWrt OS.*

  

### Bring up:

-   <span style="color: rgb(36,36,36);">To bring up serial port using
    any terminal software ( like Putty, Minicom,Teraterm ) in below
    configuration of 115200 8N1 and no to hardware and software flow
    control.</span>

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
class="sourceCode java">#set the serial device as <span class="op">/</span>dev<span class="op">/</span>ttyUSB0</code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code
class="sourceCode java">#lock file location <span class="op">-&gt;</span> <span class="op">/</span><span class="dt">var</span><span class="op">/</span>lock</code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code
class="sourceCode java">#Bps<span class="op">/</span>par<span class="op">/</span>Bits <span class="op">-&gt;</span> </code><code
class="sourceCode java"><span class="dv">115200</span></code> <code
class="sourceCode java"><span class="dv">8</span>N1</code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code
class="sourceCode java">#Hardware Flow control <span class="op">-&gt;</span> No</code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode java">#Software Flow control <span class="op">-&gt;</span> No</code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code class="sourceCode java">#enter</code>
</div>
</div></td>
</tr>
</tbody>
</table>

-   We can use minicom to get the IP of the device post which we can
    connect ssh from other terminal using :
    <span style="color: rgb(23,43,77);">ssh &lt;username-root&gt;@&lt;ip
    address&gt;</span>
-   We can try some commands such as ps -ax and ccsp commands

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK-B#"
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
<code class="sourceCode java">ad</code><code
class="sourceCode java"><span class="at">@ad</span></code><code
class="sourceCode java"><span class="op">-</span>HP<span class="op">-</span>Compaq<span class="op">-</span>Elite<span class="op">-</span></code><code
class="sourceCode java"><span class="dv">8300</span></code><code
class="sourceCode java"><span class="op">-</span>CMT<span class="op">:~</span>$ sudo minicom </code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code
class="sourceCode java"><span class="op">[</span>sudo<span class="op">]</span> password </code><code
class="sourceCode java"><span class="cf">for</span></code> <code
class="sourceCode java">ad<span class="op">:</span> </code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code class="sourceCode java">Welcome to minicom </code><code
class="sourceCode java"><span class="fl">2.7</span></code><code
class="sourceCode java"><span class="op">.</span></code><code
class="sourceCode java"><span class="dv">1</span></code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number7 index6 alt2" data-bidi-marker="true">
<code
class="sourceCode java">OPTIONS<span class="op">:</span> I18n </code>
</div>
<div class="line number8 index7 alt1" data-bidi-marker="true">
<code class="sourceCode java">Compiled on Aug </code><code
class="sourceCode java"><span class="dv">13</span></code> <code
class="sourceCode java"><span class="dv">2017</span></code><code
class="sourceCode java"><span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">15</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">25</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">34</span></code><code
class="sourceCode java"><span class="op">.</span></code>
</div>
<div class="line number9 index8 alt2" data-bidi-marker="true">
<code
class="sourceCode java"><span class="bu">Port</span> <span class="op">/</span>dev<span class="op">/</span>ttyUSB0<span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">19</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">10</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="bn">00</span></code>
</div>
<div class="line number10 index9 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number11 index10 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Press CTRL<span class="op">-</span>A Z </code><code
class="sourceCode java"><span class="cf">for</span></code> <code
class="sourceCode java">help on special keys</code>
</div>
<div class="line number12 index11 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number13 index12 alt2" data-bidi-marker="true">
<code class="sourceCode java"> </code><code
class="sourceCode java"><span class="dv">0</span></code>
</div>
<div class="line number14 index13 alt1" data-bidi-marker="true">
<code class="sourceCode java">Setting bus to </code><code
class="sourceCode java"><span class="dv">1</span></code>
</div>
<div class="line number15 index14 alt2" data-bidi-marker="true">
<code class="sourceCode java">BOOT eMMC FS</code>
</div>
<div class="line number16 index15 alt1" data-bidi-marker="true">
<code class="sourceCode java"><span class="dv">3970416</span></code>
<code class="sourceCode java">bytes read in </code><code
class="sourceCode java"><span class="dv">218</span></code> <code
class="sourceCode java"><span class="fu">ms</span> <span class="op">(</span></code><code
class="sourceCode java"><span class="fl">17.4</span></code> <code
class="sourceCode java">MiB<span class="op">/</span>s)</code>
</div>
<div class="line number17 index16 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="dv">19565</span></code> <code
class="sourceCode java">bytes read in </code><code
class="sourceCode java"><span class="dv">29</span></code> <code
class="sourceCode java"><span class="fu">ms</span> <span class="op">(</span></code><code
class="sourceCode java"><span class="fl">658.2</span></code> <code
class="sourceCode java">KiB<span class="op">/</span>s)</code>
</div>
<div class="line number18 index17 alt1" data-bidi-marker="true">
<code
class="sourceCode java"><span class="bu">Kernel</span> image <span class="at">@</span> </code><code
class="sourceCode java"><span class="bn">0x1000000</span></code> <code
class="sourceCode java"><span class="op">[</span> </code><code
class="sourceCode java"><span class="bn">0x000000</span></code> <code
class="sourceCode java"><span class="op">-</span> </code><code
class="sourceCode java"><span class="bn">0x3c9570</span></code> <code
class="sourceCode java"><span class="op">]</span></code>
</div>
<div class="line number19 index18 alt2" data-bidi-marker="true">
<code
class="sourceCode java">## Flattened Device Tree blob at </code><code
class="sourceCode java"><span class="bn">02000000</span></code>
</div>
<div class="line number20 index19 alt1" data-bidi-marker="true">
<code class="sourceCode java">   </code><code
class="sourceCode java">Booting using the fdt blob at </code><code
class="sourceCode java"><span class="bn">0x2000000</span></code>
</div>
<div class="line number21 index20 alt2" data-bidi-marker="true">
<code class="sourceCode java">   </code><code
class="sourceCode java">Loading Device Tree to <span class="dv">0</span>fff8000<span class="op">,</span> end <span class="dv">0</span>ffffc6c <span class="kw">...</span> OK</code>
</div>
<div class="line number22 index21 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number23 index22 alt2" data-bidi-marker="true">
<code
class="sourceCode java">Starting kernel <span class="kw">...</span></code>
</div>
<div class="line number24 index23 alt1" data-bidi-marker="true">
 &#10;</div>
<div class="line number25 index24 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> Booting Linux on physical CPU </code><code
class="sourceCode java"><span class="bn">0x0</span></code>
</div>
<div class="line number26 index25 alt1" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> Linux version </code><code
class="sourceCode java"><span class="fl">5.15</span></code><code
class="sourceCode java"><span class="op">.</span></code><code
class="sourceCode java"><span class="dv">44</span></code><code
class="sourceCode java"><span class="op">-</span>yocto<span class="op">-</span><span class="fu">standard</span> <span class="op">(</span>oe<span class="op">-</span>user</code><code
class="sourceCode java"><span class="at">@oe</span></code><code
class="sourceCode java"><span class="op">-</span>host) <span class="op">(</span>arm<span class="op">-</span>rdk<span class="op">-</span>linux<span class="op">-</span>gnueabi<span class="op">-</span><span class="fu">gcc</span> <span class="op">(</span>GCC<span class="op">)</span> </code><code
class="sourceCode java"><span class="fl">9.3</span></code><code
class="sourceCode java"><span class="op">.</span></code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">,</span> GNU <span class="fu">ld</span> <span class="op">(</span>GNU Binutils<span class="op">)</span> </code><code
class="sourceCode java"><span class="dv">2</span></code>
</div>
<div class="line number27 index26 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> CPU<span class="op">:</span> ARMv7 <span class="bu">Processor</span> <span class="op">[</span><span class="er">414</span>fc091<span class="op">]</span> revision </code><code
class="sourceCode java"><span class="dv">1</span></code> <code
class="sourceCode java"><span class="op">(</span>ARMv7<span class="op">),</span> cr<span class="op">=</span><span class="er">10</span>c5387d</code>
</div>
<div class="line number28 index27 alt1" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> CPU<span class="op">:</span> PIPT <span class="op">/</span> VIPT nonaliasing data cache<span class="op">,</span> VIPT aliasing instruction cache</code>
</div>
<div class="line number29 index28 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> OF<span class="op">:</span> fdt<span class="op">:</span> Machine model<span class="op">:</span> Turris Omnia</code>
</div>
<div class="line number30 index29 alt1" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> Memory policy<span class="op">:</span> <span class="bu">Data</span> cache writealloc</code>
</div>
<div class="line number31 index30 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> Zone ranges<span class="op">:</span></code>
</div>
<div class="line number32 index31 alt1" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span>   Normal   <span class="op">[</span>mem </code><code
class="sourceCode java"><span class="bn">0x0000000000000000</span></code><code
class="sourceCode java"><span class="op">-</span></code><code
class="sourceCode java"><span class="bn">0x000000002fffffff</span></code><code
class="sourceCode java"><span class="op">]</span></code>
</div>
<div class="line number33 index32 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span>   HighMem  <span class="op">[</span>mem </code><code
class="sourceCode java"><span class="bn">0x0000000030000000</span></code><code
class="sourceCode java"><span class="op">-</span></code><code
class="sourceCode java"><span class="bn">0x000000007fffffff</span></code><code
class="sourceCode java"><span class="op">]</span></code>
</div>
<div class="line number34 index33 alt1" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> Movable zone start </code><code
class="sourceCode java"><span class="cf">for</span></code> <code
class="sourceCode java">each node</code>
</div>
<div class="line number35 index34 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> Early memory node ranges</code>
</div>
<div class="line number36 index35 alt1" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span>   node   </code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">:</span> <span class="op">[</span>mem </code><code
class="sourceCode java"><span class="bn">0x0000000000000000</span></code><code
class="sourceCode java"><span class="op">-</span></code><code
class="sourceCode java"><span class="bn">0x000000007fffffff</span></code><code
class="sourceCode java"><span class="op">]</span></code>
</div>
<div class="line number37 index36 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> Initmem setup node </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java"><span class="op">[</span>mem </code><code
class="sourceCode java"><span class="bn">0x0000000000000000</span></code><code
class="sourceCode java"><span class="op">-</span></code><code
class="sourceCode java"><span class="bn">0x000000007fffffff</span></code><code
class="sourceCode java"><span class="op">]</span></code>
</div>
<div class="line number38 index37 alt1" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> percpu<span class="op">:</span> Embedded </code><code
class="sourceCode java"><span class="dv">11</span></code> <code
class="sourceCode java">pages<span class="op">/</span>cpu s14156 r8192 d22708 u45056</code>
</div>
<div class="line number39 index38 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> Built </code><code
class="sourceCode java"><span class="dv">1</span></code> <code
class="sourceCode java">zonelists<span class="op">,</span> mobility grouping on<span class="op">.</span>  Total pages<span class="op">:</span> </code><code
class="sourceCode java"><span class="dv">522560</span></code>
</div>
<div class="line number40 index39 alt1" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> <span class="bu">Kernel</span> command line<span class="op">:</span> earlyprintk console<span class="op">=</span>ttyS0<span class="op">,</span></code><code
class="sourceCode java"><span class="dv">115200</span></code> <code
class="sourceCode java">root<span class="op">=/</span>dev<span class="op">/</span>mmcblk0p5 rootfstype<span class="op">=</span>ext2 rw rootwait cfg80211<span class="op">.</span><span class="fu">freg</span><span class="op">=**</span></code>
</div>
<div class="line number41 index40 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> Bootloader command line not present</code>
</div>
<div class="line number42 index41 alt1" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> Unknown kernel command line parameters </code><code
class="sourceCode java"><span class="st">&quot;earlyprintk&quot;</span></code><code
class="sourceCode java"><span class="op">,</span> will be passed to user space<span class="op">.</span></code>
</div>
<div class="line number43 index42 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> Dentry cache hash table entries<span class="op">:</span> </code><code
class="sourceCode java"><span class="dv">131072</span></code> <code
class="sourceCode java"><span class="op">(</span>order<span class="op">:</span> </code><code
class="sourceCode java"><span class="dv">7</span></code><code
class="sourceCode java"><span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">524288</span></code> <code
class="sourceCode java">bytes<span class="op">,</span> linear)</code>
</div>
<div class="line number44 index43 alt1" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> Inode<span class="op">-</span>cache hash table entries<span class="op">:</span> </code><code
class="sourceCode java"><span class="dv">65536</span></code> <code
class="sourceCode java"><span class="op">(</span>order<span class="op">:</span> </code><code
class="sourceCode java"><span class="dv">6</span></code><code
class="sourceCode java"><span class="op">,</span> </code><code
class="sourceCode java"><span class="dv">262144</span></code> <code
class="sourceCode java">bytes<span class="op">,</span> linear)</code>
</div>
<div class="line number45 index44 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> mem auto<span class="op">-</span>init<span class="op">:</span> stack<span class="op">:</span>off<span class="op">,</span> heap alloc<span class="op">:</span>off<span class="op">,</span> heap free<span class="op">:</span>off</code>
</div>
<div class="line number46 index45 alt1" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> Memory<span class="op">:</span> <span class="er">2064556</span>K<span class="op">/</span><span class="er">2097152</span>K <span class="fu">available</span> <span class="op">(</span><span class="er">9216</span>K kernel code<span class="op">,</span> <span class="er">650</span>K rwdata<span class="op">,</span> <span class="er">1796</span>K rodata<span class="op">,</span> <span class="er">1024</span>K init<span class="op">,</span> <span class="er">244</span>K bss<span class="op">,</span> <span class="er">32596</span>K reser<span class="op">)</span></code>
</div>
<div class="line number47 index46 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> SLUB<span class="op">:</span> HWalign<span class="op">=</span></code><code
class="sourceCode java"><span class="dv">64</span></code><code
class="sourceCode java"><span class="op">,</span> Order<span class="op">=</span></code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">-</span></code><code
class="sourceCode java"><span class="dv">3</span></code><code
class="sourceCode java"><span class="op">,</span> MinObjects<span class="op">=</span></code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">,</span> CPUs<span class="op">=</span></code><code
class="sourceCode java"><span class="dv">2</span></code><code
class="sourceCode java"><span class="op">,</span> Nodes<span class="op">=</span></code><code
class="sourceCode java"><span class="dv">1</span></code>
</div>
<div class="line number48 index47 alt1" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> rcu<span class="op">:</span> Hierarchical RCU implementation<span class="op">.</span></code>
</div>
<div class="line number49 index48 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>    </code><code
class="sourceCode java"><span class="fl">0.000000</span></code><code
class="sourceCode java"><span class="op">]</span> rcu<span class="op">:</span>     RCU restricting CPUs from NR_CPUS<span class="op">=</span></code><code
class="sourceCode java"><span class="dv">4</span></code> <code
class="sourceCode java">to nr_cpu_ids<span class="op">=</span></code><code
class="sourceCode java"><span class="dv">2</span></code><code
class="sourceCode java"><span class="op">.</span></code>
</div>
<div class="line number50 index49 alt1" data-bidi-marker="true">
<code class="sourceCode java">root</code><code
class="sourceCode java"><span class="at">@TurrisOmnia</span></code><code
class="sourceCode java"><span class="op">-</span>GW<span class="op">:~</span># cat <span class="op">/</span>version<span class="op">.</span><span class="fu">txt</span> </code>
</div>
<div class="line number51 index50 alt2" data-bidi-marker="true">
<code
class="sourceCode java">imagename<span class="op">:</span>rdkb<span class="op">-</span>generic<span class="op">-</span>broadband<span class="op">-</span>image_rdk<span class="op">-</span>next_20221011054255</code>
</div>
<div class="line number52 index51 alt1" data-bidi-marker="true">
<code
class="sourceCode java">BRANCH<span class="op">=</span>rdk<span class="op">-</span>next</code>
</div>
<div class="line number53 index52 alt2" data-bidi-marker="true">
<code
class="sourceCode java">YOCTO_VERSION<span class="op">=</span>dunfell</code>
</div>
<div class="line number54 index53 alt1" data-bidi-marker="true">
<code
class="sourceCode java">VERSION<span class="op">=</span></code><code
class="sourceCode java"><span class="fl">4.10</span></code><code
class="sourceCode java"><span class="op">.</span></code><code
class="sourceCode java"><span class="fl">11.22</span></code>
</div>
<div class="line number55 index54 alt2" data-bidi-marker="true">
<code class="sourceCode java">SPIN<span class="op">=</span></code><code
class="sourceCode java"><span class="dv">0</span></code>
</div>
<div class="line number56 index55 alt1" data-bidi-marker="true">
<code
class="sourceCode java">BUILD_TIME<span class="op">=</span></code><code
class="sourceCode java"><span class="st">&quot;2022-10-11 05:42:55&quot;</span></code>
</div>
<div class="line number57 index56 alt2" data-bidi-marker="true">
<code
class="sourceCode java"><span class="bu">Generated</span> on Tue Oct </code><code
class="sourceCode java"><span class="dv">11</span></code>  <code
class="sourceCode java"><span class="bn">05</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">42</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">55</span></code> <code
class="sourceCode java">UTC </code><code
class="sourceCode java"><span class="dv">2022</span></code>
</div>
<div class="line number58 index57 alt1" data-bidi-marker="true">
<code class="sourceCode java">root</code><code
class="sourceCode java"><span class="at">@TurrisOmnia</span></code><code
class="sourceCode java"><span class="op">-</span>GW<span class="op">:~</span># <span class="op">[</span>  </code><code
class="sourceCode java"><span class="fl">225.228346</span></code><code
class="sourceCode java"><span class="op">]</span> EXT2<span class="op">-</span><span class="fu">fs</span> <span class="op">(</span>mmcblk0p5<span class="op">):</span> error<span class="op">:</span> ext2_lookup<span class="op">:</span> deleted inode referenced<span class="op">:</span> </code><code
class="sourceCode java"><span class="dv">19925</span></code>
</div>
<div class="line number59 index58 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="op">[</span>  </code><code
class="sourceCode java"><span class="fl">225.232593</span></code><code
class="sourceCode java"><span class="op">]</span> wanmanager<span class="op">[</span></code><code
class="sourceCode java"><span class="dv">9723</span></code><code
class="sourceCode java"><span class="op">]:[</span>  </code><code
class="sourceCode java"><span class="fl">225.239781</span></code><code
class="sourceCode java"><span class="op">]</span> EXT2<span class="op">-</span><span class="fu">fs</span> <span class="op">(</span>mmcblk0p5<span class="op">):</span> error<span class="op">:</span> ext2_lookup<span class="op">:</span> deleted inode referenced<span class="op">:</span> </code><code
class="sourceCode java"><span class="dv">19925</span></code>
</div>
<div class="line number60 index59 alt1" data-bidi-marker="true">
<code class="sourceCode java"> </code><code
class="sourceCode java">rdk_dyn_log_initg_dl_socket <span class="op">=</span> </code><code
class="sourceCode java"><span class="dv">3</span></code> <code
class="sourceCode java">__progname <span class="op">=</span> wanmanager</code>
</div>
<div class="line number61 index60 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number62 index61 alt1" data-bidi-marker="true">
<code class="sourceCode java">root</code><code
class="sourceCode java"><span class="at">@RaspberryPi</span></code><code
class="sourceCode java"><span class="op">-</span>Gateway<span class="op">:~</span># ifconfig erouter0</code>
</div>
<div class="line number63 index62 alt2" data-bidi-marker="true">
<code
class="sourceCode java">erouter0  Link encap<span class="op">:</span>Ethernet  HWaddr B8<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">27</span></code><code
class="sourceCode java"><span class="op">:</span>EB<span class="op">:</span><span class="fl">8D</span><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">99</span></code><code
class="sourceCode java"><span class="op">:</span><span class="fl">5F</span>  </code>
</div>
<div class="line number64 index63 alt1" data-bidi-marker="true">
<code class="sourceCode java">          </code><code
class="sourceCode java">inet addr<span class="op">:</span></code><code
class="sourceCode java"><span class="fl">192.168</span></code><code
class="sourceCode java"><span class="op">.</span></code><code
class="sourceCode java"><span class="fl">2.153</span></code>  <code
class="sourceCode java">Bcast<span class="op">:</span></code><code
class="sourceCode java"><span class="fl">192.168</span></code><code
class="sourceCode java"><span class="op">.</span></code><code
class="sourceCode java"><span class="fl">2.255</span></code>  <code
class="sourceCode java">Mask<span class="op">:</span></code><code
class="sourceCode java"><span class="fl">255.255</span></code><code
class="sourceCode java"><span class="op">.</span></code><code
class="sourceCode java"><span class="fl">255.0</span></code>
</div>
<div class="line number65 index64 alt2" data-bidi-marker="true">
<code class="sourceCode java">          </code><code
class="sourceCode java">inet6 addr<span class="op">:</span> fe80<span class="op">::</span>ba27<span class="op">:</span>ebff<span class="op">:</span>fe8d<span class="op">:</span><span class="fl">995f</span><span class="op">/</span></code><code
class="sourceCode java"><span class="dv">64</span></code> <code
class="sourceCode java">Scope<span class="op">:</span>Link</code>
</div>
<div class="line number66 index65 alt1" data-bidi-marker="true">
<code class="sourceCode java">          </code><code
class="sourceCode java">UP BROADCAST RUNNING MULTICAST  MTU<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">1500</span></code>  <code
class="sourceCode java">Metric<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">1</span></code>
</div>
<div class="line number67 index66 alt2" data-bidi-marker="true">
<code class="sourceCode java">          </code><code
class="sourceCode java">RX packets<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">2489</span></code> <code
class="sourceCode java">errors<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">dropped<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">352</span></code> <code
class="sourceCode java">overruns<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">frame<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">0</span></code>
</div>
<div class="line number68 index67 alt1" data-bidi-marker="true">
<code class="sourceCode java">          </code><code
class="sourceCode java">TX packets<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">323</span></code> <code
class="sourceCode java">errors<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">dropped<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">overruns<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">carrier<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">0</span></code>
</div>
<div class="line number69 index68 alt2" data-bidi-marker="true">
<code class="sourceCode java">          </code><code
class="sourceCode java">collisions<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">txqueuelen<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">1000</span></code>
</div>
<div class="line number70 index69 alt1" data-bidi-marker="true">
<code class="sourceCode java">          </code><code
class="sourceCode java">RX bytes<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">222391</span></code> <code
class="sourceCode java"><span class="op">(</span></code><code
class="sourceCode java"><span class="fl">217.1</span></code> <code
class="sourceCode java">KiB)  TX bytes<span class="op">:</span></code><code
class="sourceCode java"><span class="dv">40578</span></code> <code
class="sourceCode java"><span class="op">(</span></code><code
class="sourceCode java"><span class="fl">39.6</span></code> <code
class="sourceCode java">KiB)</code>
</div>
<div class="line number71 index70 alt2" data-bidi-marker="true">
 &#10;</div>
<div class="line number72 index71 alt1" data-bidi-marker="true">
<code class="sourceCode java">root</code><code
class="sourceCode java"><span class="at">@RaspberryPi</span></code><code
class="sourceCode java"><span class="op">-</span>Gateway<span class="op">:~</span># ps <span class="op">-</span>a <span class="op">|</span> grep eRT</code>
</div>
<div class="line number73 index72 alt2" data-bidi-marker="true">
<code class="sourceCode java">  </code><code
class="sourceCode java"><span class="dv">412</span></code> <code
class="sourceCode java">non<span class="op">-</span>root  </code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="bn">00</span></code> <code
class="sourceCode java"><span class="op">/</span>usr<span class="op">/</span>bin<span class="op">/</span>CcspCrSsp <span class="op">-</span>subsys eRT<span class="op">.</span></code>
</div>
<div class="line number74 index73 alt1" data-bidi-marker="true">
<code class="sourceCode java">  </code><code
class="sourceCode java"><span class="dv">468</span></code> <code
class="sourceCode java">non<span class="op">-</span>root  </code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="bn">01</span></code> <code
class="sourceCode java"><span class="op">/</span>usr<span class="op">/</span>bin<span class="op">/</span>PsmSsp <span class="op">-</span>subsys eRT<span class="op">.</span></code>
</div>
<div class="line number75 index74 alt2" data-bidi-marker="true">
<code class="sourceCode java"> </code><code
class="sourceCode java"><span class="dv">1043</span></code> <code
class="sourceCode java">root      </code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="bn">02</span></code> <code
class="sourceCode java"><span class="op">/</span>usr<span class="op">/</span>bin<span class="op">/</span>CcspPandMSsp <span class="op">-</span>subsys eRT<span class="op">.</span></code>
</div>
<div class="line number76 index75 alt1" data-bidi-marker="true">
<code class="sourceCode java"> </code><code
class="sourceCode java"><span class="dv">1720</span></code> <code
class="sourceCode java">root      </code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="bn">00</span></code> <code
class="sourceCode java"><span class="op">/</span>usr<span class="op">/</span>bin<span class="op">/</span>CcspTandDSsp <span class="op">-</span>subsys eRT<span class="op">.</span></code>
</div>
<div class="line number77 index76 alt2" data-bidi-marker="true">
<code class="sourceCode java"> </code><code
class="sourceCode java"><span class="dv">1735</span></code> <code
class="sourceCode java">non<span class="op">-</span>root  </code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="bn">00</span></code> <code
class="sourceCode java"><span class="op">/</span>usr<span class="op">/</span>bin<span class="op">/</span>CcspEthAgent <span class="op">-</span>subsys eRT<span class="op">.</span></code>
</div>
<div class="line number78 index77 alt1" data-bidi-marker="true">
<code class="sourceCode java"> </code><code
class="sourceCode java"><span class="dv">1745</span></code> <code
class="sourceCode java">root      </code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="bn">00</span></code> <code
class="sourceCode java"><span class="op">/</span>usr<span class="op">/</span>bin<span class="op">/</span>notify_comp <span class="op">-</span>subsys eRT<span class="op">.</span></code>
</div>
<div class="line number79 index78 alt2" data-bidi-marker="true">
<code class="sourceCode java"> </code><code
class="sourceCode java"><span class="dv">1752</span></code> <code
class="sourceCode java">root      </code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="bn">01</span></code> <code
class="sourceCode java"><span class="op">/</span>usr<span class="op">/</span>bin<span class="op">/</span>CcspWifiSsp <span class="op">-</span>subsys eRT<span class="op">.</span> </code><code
class="sourceCode java"><span class="dv">2</span></code>
</div>
<div class="line number80 index79 alt1" data-bidi-marker="true">
<code class="sourceCode java"> </code><code
class="sourceCode java"><span class="dv">1769</span></code> <code
class="sourceCode java">non<span class="op">-</span>root  </code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="bn">01</span></code> <code
class="sourceCode java"><span class="op">/</span>usr<span class="op">/</span>bin<span class="op">/</span>CcspTr069PaSsp <span class="op">-</span>subsys eRT<span class="op">.</span></code>
</div>
<div class="line number81 index80 alt2" data-bidi-marker="true">
<code class="sourceCode java"> </code><code
class="sourceCode java"><span class="dv">1785</span></code> <code
class="sourceCode java">root      </code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="bn">00</span></code> <code
class="sourceCode java"><span class="op">/</span>usr<span class="op">/</span>bin<span class="op">/</span>CcspAdvSecuritySsp <span class="op">-</span>subsys eRT<span class="op">.</span></code>
</div>
<div class="line number82 index81 alt1" data-bidi-marker="true">
<code class="sourceCode java"> </code><code
class="sourceCode java"><span class="dv">1789</span></code> <code
class="sourceCode java">root      </code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="bn">00</span></code> <code
class="sourceCode java"><span class="op">/</span>usr<span class="op">/</span>bin<span class="op">/</span>CcspXdnsSsp <span class="op">-</span>subsys eRT<span class="op">.</span></code>
</div>
<div class="line number83 index82 alt2" data-bidi-marker="true">
<code class="sourceCode java"> </code><code
class="sourceCode java"><span class="dv">1806</span></code> <code
class="sourceCode java">non<span class="op">-</span>root  </code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="bn">00</span></code> <code
class="sourceCode java"><span class="op">/</span>usr<span class="op">/</span>bin<span class="op">/</span>CcspLMLite <span class="op">-</span>subsys eRT<span class="op">.</span></code>
</div>
<div class="line number84 index83 alt1" data-bidi-marker="true">
<code class="sourceCode java"> </code><code
class="sourceCode java"><span class="dv">1851</span></code> <code
class="sourceCode java">root      </code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="bn">00</span></code> <code
class="sourceCode java"><span class="op">/</span>usr<span class="op">/</span>rdk<span class="op">/</span>wanmanager<span class="op">/</span>wanmanager <span class="op">-</span>subsys eRT<span class="op">.</span></code>
</div>
<div class="line number85 index84 alt2" data-bidi-marker="true">
<code class="sourceCode java"> </code><code
class="sourceCode java"><span class="dv">1907</span></code> <code
class="sourceCode java">root      </code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="bn">00</span></code> <code
class="sourceCode java"><span class="op">/</span>usr<span class="op">/</span>bin<span class="op">/</span>fwupgrademanager <span class="op">-</span>subsys eRT<span class="op">.</span></code>
</div>
<div class="line number86 index85 alt1" data-bidi-marker="true">
<code class="sourceCode java"> </code><code
class="sourceCode java"><span class="dv">1935</span></code> <code
class="sourceCode java">root      </code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="bn">00</span></code> <code
class="sourceCode java"><span class="op">/</span>usr<span class="op">/</span>bin<span class="op">/</span>cellularmanager <span class="op">-</span>subsys eRT<span class="op">.</span></code>
</div>
<div class="line number87 index86 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="dv">12125</span></code> <code
class="sourceCode java">root      </code><code
class="sourceCode java"><span class="dv">0</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="bn">00</span></code> <code
class="sourceCode java">grep eRT</code>
</div>
<div class="line number88 index87 alt1" data-bidi-marker="true">
<code class="sourceCode java">root</code><code
class="sourceCode java"><span class="at">@RaspberryPi</span></code><code
class="sourceCode java"><span class="op">-</span>Gateway<span class="op">:~</span>#  </code>
</div>
</div></td>
</tr>
</tbody>
</table>

 

-   <span style="color: rgb(29,28,29);"><span style="color: rgb(23,43,77);">In
    browser we can execute the IP address of the box to see WEBUI  using
    &lt;IP
    address&gt;:&lt;<a href="http://port.no/" class="external-link"
    rel="nofollow">port.no</a>&gt;</span></span>
