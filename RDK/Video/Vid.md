# **Try Out RDK-V**

# Raspberry Pi

------------------------------------------------------------------------

RDK port for Raspberry Pi makes the RDK software stack available on a
popular hardware device.

  

## Build Setup Instructions

------------------------------------------------------------------------

### Setting up the Host Environment

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table tablesorter tablesorter-default"
data-ite-table-index="0" data-resolved="" data-table-index="0"
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
data-ite-table-index="1" data-resolved="" data-table-index="1">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="100"><p>machine<span> </span><a
href="http://code.rdkcentral.com/" class="external-link" rel="nofollow"
style="text-decoration: none;">code.rdkcentral.com</a></p>
<p>    login &lt;YOUR_USERNAME&gt;</p>
<p>    password &lt;YOUR_PASSWORD&gt;</p></th>
</tr>
&#10;</tbody>
</table>

## Build


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
class="sourceCode java"><span class="co">//code.rdkcentral.com/r/manifests -b dunfell -m rdkv-nosrc.xml</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code
class="sourceCode java">repo sync <span class="op">-</span>j `nproc` <span class="op">--</span>no<span class="op">-</span>clone<span class="op">-</span>bundle <span class="op">--</span>no<span class="op">-</span>tags</code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code
class="sourceCode java">MACHINE<span class="op">=</span>raspberrypi<span class="op">-</span>rdk<span class="op">-</span>mc source meta<span class="op">-</span>cmf<span class="op">-</span>raspberrypi<span class="op">/</span>setup<span class="op">-</span>environment</code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode java">bitbake rdk<span class="op">-</span>generic<span class="op">-</span>mediaclient<span class="op">-</span>wpe<span class="op">-</span>image</code>
</div>
</div></td>
</tr>
</tbody>
</table>

<span style="color: rgb(23,43,77);">The generated image resides under
the directory
</span>`build-<MACHINE>/tmp/deploy/images/<MACHINE>`<span style="color: rgb(23,43,77);"> of
the Yocto workspace</span>

## <span style="color: black;">Flash image and bring up</span>

------------------------------------------------------------------------

### Flash image

1\. Insert an SD card in the SD card port of the USB SD card reader (or
Laptop).

     **Prefer to use 32gb sd card and there should be minimum 12gb free
space available in the device .**

2\. Verify that the SD card has been detected by executing either of the
commands listed below



<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 100%" />
</colgroup>
<tbody>
<tr class="odd">
<td class="code"><div class="container"
title="Hint: double-click to select code">
<div class="line number1 index0 alt2" data-bidi-marker="true">
<code class="sourceCode java">$lsblk</code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code class="sourceCode java">$sudo fdisk –l</code>
</div>
</div></td>
</tr>
</tbody>
</table>



<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 100%" />
</colgroup>
<tbody>
<tr class="odd">
<td class="code"><div class="container"
title="Hint: double-click to select code">
<div class="line number1 index0 alt2" data-bidi-marker="true">
<code class="sourceCode java">$ lsblk</code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code
class="sourceCode java">NAME   MAJ<span class="op">:</span>MIN RM   SIZE RO TYPE MOUNTPOINT</code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code class="sourceCode java">sda      </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">0</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java"><span class="dv">931</span></code><code
class="sourceCode java"><span class="fl">.5</span>G  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">disk</code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code class="sourceCode java">├─sda1   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">1</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code>   <code
class="sourceCode java"><span class="er">350</span>M  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part</code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code class="sourceCode java">├─sda2   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">2</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code>     <code
class="sourceCode java"><span class="dv">3</span>G  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part</code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code class="sourceCode java">├─sda3   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">3</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java"><span class="dv">896</span></code><code
class="sourceCode java"><span class="fl">.4</span>G  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part <span class="op">/</span></code>
</div>
<div class="line number7 index6 alt2" data-bidi-marker="true">
<code class="sourceCode java">├─sda4   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">4</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code>     <code
class="sourceCode java"><span class="dv">1</span>K  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part</code>
</div>
<div class="line number8 index7 alt1" data-bidi-marker="true">
<code class="sourceCode java">└─sda5   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">5</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code>  <code
class="sourceCode java"><span class="dv">31</span></code><code
class="sourceCode java"><span class="fl">.8</span>G  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part <span class="op">[</span>SWAP<span class="op">]</span></code>
</div>
<div class="line number9 index8 alt2" data-bidi-marker="true">
<code class="sourceCode java">sdb      </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">16</span></code>   <code
class="sourceCode java"><span class="dv">1</span></code>  <code
class="sourceCode java"><span class="dv">14</span></code><code
class="sourceCode java"><span class="fl">.9</span>G  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">disk</code>
</div>
<div class="line number10 index9 alt1" data-bidi-marker="true">
<code class="sourceCode java">├─sdb1   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">17</span></code>   <code
class="sourceCode java"><span class="dv">1</span></code>    <code
class="sourceCode java"><span class="er">40</span>M  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part <span class="op">/</span>media<span class="op">/</span>raspberrypi</code>
</div>
<div class="line number11 index10 alt2" data-bidi-marker="true">
<code class="sourceCode java">└─sdb2   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">18</span></code>   <code
class="sourceCode java"><span class="dv">1</span></code>   <code
class="sourceCode java"><span class="er">552</span>M  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part <span class="op">/</span>media<span class="op">/</span>dd5efb34<span class="op">-</span><span class="dv">1</span>d40<span class="op">-</span><span class="fl">4e50</span><span class="op">-</span>bbc2<span class="op">-</span>a75d3e02af97</code>
</div>
<div class="line number12 index11 alt1" data-bidi-marker="true">
<code class="sourceCode java">sr0     </code><code
class="sourceCode java"><span class="dv">11</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">0</span></code>    <code
class="sourceCode java"><span class="dv">1</span></code>  <code
class="sourceCode java"><span class="er">1024</span>M  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">rom</code>
</div>
</div></td>
</tr>
</tbody>
</table>

 3. Type the following command to ensure that the partitions, if
present, on the SD card are not mounted

  


<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 100%" />
</colgroup>
<tbody>
<tr class="odd">
<td class="code"><div class="container"
title="Hint: double-click to select code">
<div class="line number1 index0 alt2" data-bidi-marker="true">
<code class="sourceCode java">$mount</code>
</div>
</div></td>
</tr>
</tbody>
</table>



<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 100%" />
</colgroup>
<tbody>
<tr class="odd">
<td class="code"><div class="container"
title="Hint: double-click to select code">
<div class="line number1 index0 alt2" data-bidi-marker="true">
<code class="sourceCode java">$ mount</code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code
class="sourceCode java"><span class="op">/</span>dev<span class="op">/</span>sda3 on <span class="op">/</span> type <span class="fu">ext4</span> <span class="op">(</span>rw<span class="op">,</span>errors<span class="op">=</span>remount<span class="op">-</span>ro<span class="op">)</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code
class="sourceCode java">proc on <span class="op">/</span>proc type <span class="fu">proc</span> <span class="op">(</span>rw<span class="op">,</span>noexec<span class="op">,</span>nosuid<span class="op">,</span>nodev<span class="op">)</span></code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code
class="sourceCode java">sysfs on <span class="op">/</span>sys type <span class="fu">sysfs</span> <span class="op">(</span>rw<span class="op">,</span>noexec<span class="op">,</span>nosuid<span class="op">,</span>nodev<span class="op">)</span></code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode java">none on <span class="op">/</span>sys<span class="op">/</span>fs<span class="op">/</span>fuse<span class="op">/</span>connections type <span class="fu">fusectl</span> <span class="op">(</span>rw<span class="op">)</span></code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code
class="sourceCode java">none on <span class="op">/</span>sys<span class="op">/</span>kernel<span class="op">/</span>debug type <span class="fu">debugfs</span> <span class="op">(</span>rw<span class="op">)</span></code>
</div>
<div class="line number7 index6 alt2" data-bidi-marker="true">
<code
class="sourceCode java">none on <span class="op">/</span>sys<span class="op">/</span>kernel<span class="op">/</span>security type <span class="fu">securityfs</span> <span class="op">(</span>rw<span class="op">)</span></code>
</div>
<div class="line number8 index7 alt1" data-bidi-marker="true">
<code
class="sourceCode java">udev on <span class="op">/</span>dev type <span class="fu">devtmpfs</span> <span class="op">(</span>rw<span class="op">,</span>mode<span class="op">=</span></code><code
class="sourceCode java"><span class="bn">0755</span></code><code
class="sourceCode java">)</code>
</div>
<div class="line number9 index8 alt2" data-bidi-marker="true">
<code
class="sourceCode java">devpts on <span class="op">/</span>dev<span class="op">/</span>pts type <span class="fu">devpts</span> <span class="op">(</span>rw<span class="op">,</span>noexec<span class="op">,</span>nosuid<span class="op">,</span>gid<span class="op">=</span></code><code
class="sourceCode java"><span class="dv">5</span></code><code
class="sourceCode java"><span class="op">,</span>mode<span class="op">=</span></code><code
class="sourceCode java"><span class="bn">0620</span></code><code
class="sourceCode java">)</code>
</div>
<div class="line number10 index9 alt1" data-bidi-marker="true">
<code
class="sourceCode java">tmpfs on <span class="op">/</span>run type <span class="fu">tmpfs</span> <span class="op">(</span>rw<span class="op">,</span>noexec<span class="op">,</span>nosuid<span class="op">,</span>size<span class="op">=</span></code><code
class="sourceCode java"><span class="dv">10</span></code><code
class="sourceCode java"><span class="op">%,</span>mode<span class="op">=</span></code><code
class="sourceCode java"><span class="bn">0755</span></code><code
class="sourceCode java">)</code>
</div>
<div class="line number11 index10 alt2" data-bidi-marker="true">
<code
class="sourceCode java">none on <span class="op">/</span>run<span class="op">/</span>lock type <span class="fu">tmpfs</span> <span class="op">(</span>rw<span class="op">,</span>noexec<span class="op">,</span>nosuid<span class="op">,</span>nodev<span class="op">,</span>size<span class="op">=</span></code><code
class="sourceCode java"><span class="dv">5242880</span></code><code
class="sourceCode java">)</code>
</div>
<div class="line number12 index11 alt1" data-bidi-marker="true">
<code
class="sourceCode java">none on <span class="op">/</span>run<span class="op">/</span>shm type <span class="fu">tmpfs</span> <span class="op">(</span>rw<span class="op">,</span>nosuid<span class="op">,</span>nodev<span class="op">)</span></code>
</div>
<div class="line number13 index12 alt2" data-bidi-marker="true">
<code
class="sourceCode java">binfmt_misc on <span class="op">/</span>proc<span class="op">/</span>sys<span class="op">/</span>fs<span class="op">/</span>binfmt_misc type <span class="fu">binfmt_misc</span> <span class="op">(</span>rw<span class="op">,</span>noexec<span class="op">,</span>nosuid<span class="op">,</span>nodev<span class="op">)</span></code>
</div>
<div class="line number14 index13 alt1" data-bidi-marker="true">
<code
class="sourceCode java">rpc_pipefs on <span class="op">/</span>run<span class="op">/</span>rpc_pipefs type <span class="fu">rpc_pipefs</span> <span class="op">(</span>rw<span class="op">)</span></code>
</div>
<div class="line number15 index14 alt2" data-bidi-marker="true">
<code
class="sourceCode java">nfsd on <span class="op">/</span>proc<span class="op">/</span>fs<span class="op">/</span>nfsd type <span class="fu">nfsd</span> <span class="op">(</span>rw<span class="op">)</span></code>
</div>
<div class="line number16 index15 alt1" data-bidi-marker="true">
<code
class="sourceCode java">none on <span class="op">/</span>tmp<span class="op">/</span>guest<span class="op">-</span>zdrO76 type <span class="fu">tmpfs</span> <span class="op">(</span>rw<span class="op">,</span>mode<span class="op">=</span></code><code
class="sourceCode java"><span class="dv">700</span></code><code
class="sourceCode java">)</code>
</div>
<div class="line number17 index16 alt2" data-bidi-marker="true">
<code
class="sourceCode java">gvfs<span class="op">-</span>fuse<span class="op">-</span>daemon on <span class="op">/</span><span class="dt">var</span><span class="op">/</span>lib<span class="op">/</span>lightdm<span class="op">/.</span><span class="fu">gvfs</span> type fuse<span class="op">.</span><span class="fu">gvfs</span><span class="op">-</span>fuse<span class="op">-</span><span class="fu">daemon</span> <span class="op">(</span>rw<span class="op">,</span>nosuid<span class="op">,</span>nodev<span class="op">,</span>user<span class="op">=</span>lightdm<span class="op">)</span></code>
</div>
<div class="line number18 index17 alt1" data-bidi-marker="true">
<code
class="sourceCode java"><span class="op">/</span>dev<span class="op">/</span>sdb1 on <span class="op">/</span>media<span class="op">/</span>raspberrypi type <span class="fu">vfat</span> <span class="op">(</span>rw<span class="op">,</span>nosuid<span class="op">,</span>nodev<span class="op">,</span>uid<span class="op">=</span></code><code
class="sourceCode java"><span class="dv">136</span></code><code
class="sourceCode java"><span class="op">,</span>gid<span class="op">=</span></code><code
class="sourceCode java"><span class="dv">148</span></code><code
class="sourceCode java"><span class="op">,</span>shortname<span class="op">=</span>mixed<span class="op">,</span>dmask<span class="op">=</span></code><code
class="sourceCode java"><span class="bn">0077</span></code><code
class="sourceCode java"><span class="op">,</span>utf8<span class="op">=</span></code><code
class="sourceCode java"><span class="dv">1</span></code><code
class="sourceCode java"><span class="op">,</span>showexec<span class="op">,</span>flush<span class="op">,</span>uhelper<span class="op">=</span>udisks)</code>
</div>
<div class="line number19 index18 alt2" data-bidi-marker="true">
<code
class="sourceCode java"><span class="op">/</span>dev<span class="op">/</span>sdb2 on <span class="op">/</span>media<span class="op">/</span>dd5efb34<span class="op">-</span><span class="dv">1</span>d40<span class="op">-</span><span class="fl">4e50</span><span class="op">-</span>bbc2<span class="op">-</span>a75d3e02af97 type <span class="fu">ext3</span> <span class="op">(</span>rw<span class="op">,</span>nosuid<span class="op">,</span>nodev<span class="op">,</span>uhelper<span class="op">=</span>udisks<span class="op">)</span></code>
</div>
</div></td>
</tr>
</tbody>
</table>

4\. Repeat the below command to unmount all the mounted partition
present on the SD card.

  

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
class="sourceCode java">$umount <span class="op">&lt;</span>partition<span class="op">-</span>mountpoint<span class="op">&gt;</span></code>
</div>
</div></td>
</tr>
</tbody>
</table>


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
class="sourceCode java">$ sudo umount <span class="op">/</span>dev<span class="op">/</span>sdb1</code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code class="sourceCode java">$ lsblk</code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code
class="sourceCode java">NAME   MAJ<span class="op">:</span>MIN RM   SIZE RO TYPE MOUNTPOINT</code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code class="sourceCode java">sda      </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">0</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java"><span class="dv">931</span></code><code
class="sourceCode java"><span class="fl">.5</span>G  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">disk</code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code class="sourceCode java">├─sda1   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">1</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code>   <code
class="sourceCode java"><span class="er">350</span>M  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part</code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code class="sourceCode java">├─sda2   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">2</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code>     <code
class="sourceCode java"><span class="dv">3</span>G  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part</code>
</div>
<div class="line number7 index6 alt2" data-bidi-marker="true">
<code class="sourceCode java">├─sda3   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">3</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java"><span class="dv">896</span></code><code
class="sourceCode java"><span class="fl">.4</span>G  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part <span class="op">/</span></code>
</div>
<div class="line number8 index7 alt1" data-bidi-marker="true">
<code class="sourceCode java">├─sda4   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">4</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code>     <code
class="sourceCode java"><span class="dv">1</span>K  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part</code>
</div>
<div class="line number9 index8 alt2" data-bidi-marker="true">
<code class="sourceCode java">└─sda5   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">5</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code>  <code
class="sourceCode java"><span class="dv">31</span></code><code
class="sourceCode java"><span class="fl">.8</span>G  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part <span class="op">[</span>SWAP<span class="op">]</span></code>
</div>
<div class="line number10 index9 alt1" data-bidi-marker="true">
<code class="sourceCode java">sdb      </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">16</span></code>   <code
class="sourceCode java"><span class="dv">1</span></code>  <code
class="sourceCode java"><span class="dv">14</span></code><code
class="sourceCode java"><span class="fl">.9</span>G  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">disk</code>
</div>
<div class="line number11 index10 alt2" data-bidi-marker="true">
<code class="sourceCode java">├─sdb1   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">17</span></code>   <code
class="sourceCode java"><span class="dv">1</span></code>    <code
class="sourceCode java"><span class="er">40</span>M  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part</code>
</div>
<div class="line number12 index11 alt1" data-bidi-marker="true">
<code class="sourceCode java">└─sdb2   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">18</span></code>   <code
class="sourceCode java"><span class="dv">1</span></code>   <code
class="sourceCode java"><span class="er">552</span>M  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part <span class="op">/</span>media<span class="op">/</span>dd5efb34<span class="op">-</span><span class="dv">1</span>d40<span class="op">-</span><span class="fl">4e50</span><span class="op">-</span>bbc2<span class="op">-</span>a75d3e02af97</code>
</div>
<div class="line number13 index12 alt2" data-bidi-marker="true">
<code class="sourceCode java">sr0     </code><code
class="sourceCode java"><span class="dv">11</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">0</span></code>    <code
class="sourceCode java"><span class="dv">1</span></code>  <code
class="sourceCode java"><span class="er">1024</span>M  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">rom</code>
</div>
<div class="line number14 index13 alt1" data-bidi-marker="true">
<code
class="sourceCode java">$ sudo umount <span class="op">/</span>dev<span class="op">/</span>sdb2</code>
</div>
<div class="line number15 index14 alt2" data-bidi-marker="true">
<code class="sourceCode java">$ lsblk</code>
</div>
<div class="line number16 index15 alt1" data-bidi-marker="true">
<code
class="sourceCode java">NAME   MAJ<span class="op">:</span>MIN RM   SIZE RO TYPE MOUNTPOINT</code>
</div>
<div class="line number17 index16 alt2" data-bidi-marker="true">
<code class="sourceCode java">sda      </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">0</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java"><span class="dv">931</span></code><code
class="sourceCode java"><span class="fl">.5</span>G  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">disk</code>
</div>
<div class="line number18 index17 alt1" data-bidi-marker="true">
<code class="sourceCode java">├─sda1   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">1</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code>   <code
class="sourceCode java"><span class="er">350</span>M  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part</code>
</div>
<div class="line number19 index18 alt2" data-bidi-marker="true">
<code class="sourceCode java">├─sda2   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">2</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code>     <code
class="sourceCode java"><span class="dv">3</span>G  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part</code>
</div>
<div class="line number20 index19 alt1" data-bidi-marker="true">
<code class="sourceCode java">├─sda3   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">3</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java"><span class="dv">896</span></code><code
class="sourceCode java"><span class="fl">.4</span>G  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part <span class="op">/</span></code>
</div>
<div class="line number21 index20 alt2" data-bidi-marker="true">
<code class="sourceCode java">├─sda4   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">4</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code>     <code
class="sourceCode java"><span class="dv">1</span>K  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part</code>
</div>
<div class="line number22 index21 alt1" data-bidi-marker="true">
<code class="sourceCode java">└─sda5   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">5</span></code>    <code
class="sourceCode java"><span class="dv">0</span></code>  <code
class="sourceCode java"><span class="dv">31</span></code><code
class="sourceCode java"><span class="fl">.8</span>G  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part <span class="op">[</span>SWAP<span class="op">]</span></code>
</div>
<div class="line number23 index22 alt2" data-bidi-marker="true">
<code class="sourceCode java">sdb      </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">16</span></code>   <code
class="sourceCode java"><span class="dv">1</span></code>  <code
class="sourceCode java"><span class="dv">14</span></code><code
class="sourceCode java"><span class="fl">.9</span>G  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">disk</code>
</div>
<div class="line number24 index23 alt1" data-bidi-marker="true">
<code class="sourceCode java">├─sdb1   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">17</span></code>   <code
class="sourceCode java"><span class="dv">1</span></code>    <code
class="sourceCode java"><span class="er">40</span>M  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part</code>
</div>
<div class="line number25 index24 alt2" data-bidi-marker="true">
<code class="sourceCode java">└─sdb2   </code><code
class="sourceCode java"><span class="dv">8</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">18</span></code>   <code
class="sourceCode java"><span class="dv">1</span></code>   <code
class="sourceCode java"><span class="er">552</span>M  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">part</code>
</div>
<div class="line number26 index25 alt1" data-bidi-marker="true">
<code class="sourceCode java">sr0     </code><code
class="sourceCode java"><span class="dv">11</span></code><code
class="sourceCode java"><span class="op">:</span></code><code
class="sourceCode java"><span class="dv">0</span></code>    <code
class="sourceCode java"><span class="dv">1</span></code>  <code
class="sourceCode java"><span class="er">1024</span>M  </code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">rom</code>
</div>
</div></td>
</tr>
</tbody>
</table>

5\. Execute the following command to flash the image on the SD card

  

**Flash Command**


<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 100%" />
</colgroup>
<tbody>
<tr class="odd">
<td class="code"><div class="container"
title="Hint: double-click to select code">
<div class="line number1 index0 alt2" data-bidi-marker="true">
<code class="sourceCode java">$sudo dd </code><code
class="sourceCode java"><span class="cf">if</span></code><code
class="sourceCode java"><span class="op">=&lt;</span>path to ImageName<span class="op">.</span><span class="fu">Rpi</span><span class="op">-</span>sdimg<span class="op">&gt;</span> of<span class="op">=&lt;</span>path to SD card space<span class="op">&gt;</span> bs<span class="op">=</span><span class="dv">4</span>M</code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code class="sourceCode java">Example<span class="op">:</span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code class="sourceCode java">$sudo dd </code><code
class="sourceCode java"><span class="cf">if</span></code><code
class="sourceCode java"><span class="op">=</span>rdk<span class="op">-</span>generic<span class="op">-</span>mediaclient<span class="op">-</span>wpe<span class="op">-</span>image<span class="op">.</span><span class="fu">Rpi</span><span class="op">-</span>sdimg of<span class="op">=/</span>dev<span class="op">/</span>sdb bs<span class="op">=</span><span class="dv">4</span>M</code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code class="sourceCode java"><span class="dv">149</span></code><code
class="sourceCode java"><span class="op">+</span></code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">records in</code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code class="sourceCode java"><span class="dv">149</span></code><code
class="sourceCode java"><span class="op">+</span></code><code
class="sourceCode java"><span class="dv">0</span></code> <code
class="sourceCode java">records out</code>
</div>
<div class="line number6 index5 alt1" data-bidi-marker="true">
<code class="sourceCode java"><span class="dv">624951296</span></code>
<code
class="sourceCode java"><span class="fu">bytes</span> <span class="op">(</span></code><code
class="sourceCode java"><span class="dv">625</span></code> <code
class="sourceCode java">MB) copied<span class="op">,</span> </code><code
class="sourceCode java"><span class="fl">39.7752</span></code> <code
class="sourceCode java">s<span class="op">,</span> </code><code
class="sourceCode java"><span class="fl">15.7</span></code> <code
class="sourceCode java">MB<span class="op">/</span>s</code>
</div>
</div></td>
</tr>
</tbody>
</table>

6. Remove the SD card and insert it to the Raspberry Pi SD card slot 

7. Power on the Rpi and Bring up the device  
  
  
  

-   TV screen will display the Raspberry Pi's IP address(referred as
    machineIP from now) with default RDK UI as shown below.

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/Device%20bringup.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211787608/Device%20bringup.png?version=1&amp;modificationDate=1657281010000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="213591186"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="Device bringup.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="400" /></span>

  

### Accessing Raspberry Pi

-    For connecting Controller UI, use URL:
    http://&lt;machineIP&gt;:9998

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/controllerui.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211787608/controllerui.png?version=1&amp;modificationDate=1657281010000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="213591187"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="controllerui.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="400" /></span>

-   Plugins can be enabled or disabled from controller UI. 

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/apps_window.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211787608/apps_window.png?version=1&amp;modificationDate=1657281010000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="213591188"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="apps_window.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="400" /></span>

-   Wifi related services can be triggered from Wi-Fi tab in controller
    UI. We can scan and select from available networks.

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/wifi.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211787608/wifi.png?version=1&amp;modificationDate=1657281010000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="213591189"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="wifi.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="400" /></span>

-   For ssh, we can use ssh root@machineip
-   For verifying the image details, we can use cat /version.txt
    command. 

  

  

# <span style="letter-spacing: -0.01em;">Emulator</span>

------------------------------------------------------------------------

The RDK emulator is an x86 based implementation of the RDK software
stack. It is primarily targeted towards the RDK development community
(integrators, component developers and application developers) that
attempts to simplify the process of working with the RDK software stack
without the need for a reference hardware platform. As RDK emulator runs
on desktop computers, applications can be tested and debugged before
trying to deploy them to real devices.

  

## <span style="letter-spacing: -0.008em;">Build Setup Instructions</span>

------------------------------------------------------------------------

### Setting up the Host Environment

Pre-Requisites

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table tablesorter tablesorter-default"
data-ite-table-index="2" data-resolved="" data-table-index="2"
role="grid">
<thead>
<tr class="header tablesorter-headerRow" data-ite-row-number="0"
role="row">
<th
class="confluenceTh custom-row tablesorter-header sortableHeader tablesorter-headerUnSorted"
style="text-align: center; user-select: none;" data-ite-col-number="0"
data-row-index="0" data-column-index="200" data-column="0" tabindex="0"
scope="col" role="columnheader" aria-disabled="false"
data-unselectable="on" aria-sort="none"
aria-label="Requirement: No sort applied, activate to apply an ascending sort"><div
class="tablesorter-header-inner">
<p><span>Requirement</span></p>
</div></th>
<th
class="confluenceTh custom-row tablesorter-header sortableHeader tablesorter-headerUnSorted"
style="text-align: center; user-select: none;" data-ite-col-number="1"
data-row-index="0" data-column-index="201" data-column="1" tabindex="0"
scope="col" role="columnheader" aria-disabled="false"
data-unselectable="on" aria-sort="none"
aria-label="Yocto 2.2 (Morty): No sort applied, activate to apply an ascending sort"><div
class="tablesorter-header-inner">
<p><span>Yocto 2.2 (Morty)</span></p>
</div></th>
<th
class="confluenceTh custom-row tablesorter-header sortableHeader tablesorter-headerUnSorted"
style="text-align: center; user-select: none;" data-ite-col-number="2"
data-row-index="0" data-column-index="202" data-column="2" tabindex="0"
scope="col" role="columnheader" aria-disabled="false"
data-unselectable="on" aria-sort="none"
aria-label="Yocto 3.1 LTS (Dunfell): No sort applied, activate to apply an ascending sort"><div
class="tablesorter-header-inner">
Yocto 3.1 LTS (Dunfell)
</div></th>
</tr>
</thead>
<tbody class="ui-sortable" aria-live="polite" aria-relevant="all">
<tr class="odd" data-ite-row-number="1" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="1"
data-column-index="200"><p><span>Linux</span></p></td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="1" data-column-index="201"><p><span>32/64 bit Ubuntu
16.04 LTS</span></p>
<p>Precise supported distributions and versions are <a
href="https://www.yoctoproject.org/docs/2.2/ref-manual/ref-manual.html#detailed-supported-distros"
class="external-link" rel="nofollow">here</a></p></td>
<td class="confluenceTd custom-row" data-ite-col-number="2"
data-row-index="1" data-column-index="202"><p>64 bit Ubuntu 18.04
LTS</p>
<p>Precise supported distributions and versions are <a
href="https://www.yoctoproject.org/docs/3.1/ref-manual/ref-manual.html#detailed-supported-distros"
class="external-link" rel="nofollow">here</a></p></td>
</tr>
<tr class="even" data-ite-row-number="2" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="2" data-column-index="200"><p><span>Free HDD
Space</span></p></td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="2" data-column-index="201"><p><span>Minimum 100GB Free
Memory</span></p></td>
<td class="confluenceTd custom-row" data-ite-col-number="2"
data-row-index="2" data-column-index="202">Minimum 100GB Free memory
space</td>
</tr>
<tr class="odd" data-ite-row-number="3" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="3" data-column-index="200"><p><span>Oracle Virtual
Box</span></p></td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="3" data-column-index="201"><p><span>5.0.40 or
higher</span></p></td>
<td class="confluenceTd custom-row" data-ite-col-number="2"
data-row-index="3" data-column-index="202">-</td>
</tr>
<tr class="even" data-ite-row-number="4" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="4" data-column-index="200"><p><span>Wireless
Adapter</span></p></td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="4" data-column-index="201"><p><span>Brand Name: Tenda
ralink &amp; Model Number:W311MI</span></p>
<p><span>TP-Link Archer T4U AC 1200</span></p></td>
<td class="confluenceTd custom-row" data-ite-col-number="2"
data-row-index="4" data-column-index="202">-</td>
</tr>
<tr class="odd" data-ite-row-number="5" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="5" data-column-index="200"><p><span>USB to Ethernet
Switch</span></p></td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="5" data-column-index="201"><p><span>To connect with
Ethernet Switch &amp; Multiple Clients</span></p></td>
<td class="confluenceTd custom-row" data-ite-col-number="2"
data-row-index="5" data-column-index="202"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="6" role="row">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="6" data-column-index="200">Host Tools version</td>
<td class="confluenceTd custom-row" data-ite-col-number="1"
data-row-index="6" data-column-index="201"><ul>
<li><p>Git 1.8.3.1 or greater</p></li>
<li><p>tar 1.24 or greater</p></li>
<li><p>Python 2.7.3</p></li>
</ul></td>
<td class="confluenceTd custom-row" data-ite-col-number="2"
data-row-index="6" data-column-index="202"><ul>
<li><p>Git 1.8.3.1 or greater</p></li>
<li><p>tar 1.28 or greater</p></li>
<li><p>Python 3.5.0 or greater</p></li>
</ul></td>
</tr>
</tbody>
</table>

## <span style="color: black;">Environment</span>

------------------------------------------------------------------------

#### Install the following packages for setting up your host VM

The instructions provided below are meant to be executed via the command
line on an Ubuntu machine

**for yocto 3.1 (dunfell)**


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

On Ubuntu 16.04 LTS, if you are unable to upgrade your git version using
apt-get, then follow the below steps in order to upgrade 


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

#### <span style="font-size: 16.0px;font-weight: bold;letter-spacing: -0.006em;"> </span><span style="font-size: 16.0px;font-weight: bold;letter-spacing: -0.006em;">Credential configuration</span>

**\*Note**: it is also recommended to put credentials in .netrc when
interacting with the repo.

A sample .netrc file is illustrated below

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="3" data-resolved="" data-table-index="3">
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

## Build

------------------------------------------------------------------------

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
class="sourceCode java">mkdir dunfell <span class="op">&amp;&amp;</span> cd dunfell</code>
</div>
<div class="line number2 index1 alt1" data-bidi-marker="true">
<code
class="sourceCode java">repo init <span class="op">-</span>u https<span class="op">:</span></code><code
class="sourceCode java"><span class="co">//code.rdkcentral.com/r/manifests -b dunfell -m rdkv-nosrc.xml </span></code>
</div>
<div class="line number3 index2 alt2" data-bidi-marker="true">
<code
class="sourceCode java">repo sync <span class="op">-</span>j `nproc` <span class="op">--</span>no<span class="op">-</span>clone<span class="op">-</span>bundle <span class="op">--</span>no<span class="op">-</span>tags</code>
</div>
<div class="line number4 index3 alt1" data-bidi-marker="true">
<code
class="sourceCode java">MACHINE<span class="op">=</span>qemux86mc<span class="op">-</span>dunfell source meta<span class="op">-</span>cmf<span class="op">-</span>bsp<span class="op">-</span>emulator<span class="op">/</span>setup<span class="op">-</span>environment  </code>
</div>
<div class="line number5 index4 alt2" data-bidi-marker="true">
<code
class="sourceCode java">bitbake rdk<span class="op">-</span>generic<span class="op">-</span>mediaclient<span class="op">-</span>wpe<span class="op">-</span>image</code>
</div>
</div></td>
</tr>
</tbody>
</table>

On Successful build, the image (in .vmdk format) would be available at
the following reference location -

-       build-qemux86mc-dunfell/tmp/deploy/images/qemux86mc -dunfell

## <span style="color: black;">Flash image and bring up:</span>

------------------------------------------------------------------------

<u>Host Requirements:</u>

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table tablesorter tablesorter-default"
data-ite-table-index="4" data-resolved="" data-table-index="4"
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

<u>Install Virtual Box and follow the following steps to bring up RDK
Emulator on Virtual Box:</u>

In the following steps, it is recommended to review the description and
screenshot completely before proceeding with steps.

#### STEP 1: Create your new VM Instance:

-   Open Virtualbox → Select New \[A popup will come up\]→ Select Type
    as ‘Linux’→ Select Version as ‘Other Linux (32 Bit)’→ Click on
    “Next”

-   Choose a Memory Size of 512 MB

**<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/image2014-10-9%2016_41_36.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211787608/image2014-10-9%2016%3A41%3A36.png?version=1&amp;modificationDate=1680170125000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396612"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2014-10-9 16:41:36.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="250" /></span><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/image2014-10-9%2016_39_39.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211787608/image2014-10-9%2016%3A39%3A39.png?version=1&amp;modificationDate=1680170125000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396613"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2014-10-9 16:39:39.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="250" /></span>**

-   Use an existing virtual hard drive file which would be your
    dowloaded image in \*.vmdk format and create your VM:

**<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/image2014-10-9%2016_42_10.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211787608/image2014-10-9%2016%3A42%3A10.png?version=1&amp;modificationDate=1680170125000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396614"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2014-10-9 16:42:10.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="250" /></span>**

#### STEP 2: Configure your new VM Instance:

-   Click on “Settings” tab to configure your new VM instance

-   Configure your VMs network settings

-   Choose “Bridged Adapter” mode as shown in the screenshot below

**<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/image2014-10-9%2016_43_23.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211787608/image2014-10-9%2016%3A43%3A23.png?version=1&amp;modificationDate=1680170125000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396615"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2014-10-9 16:43:23.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="250" /></span><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/image2014-10-9%2016_43_1.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211787608/image2014-10-9%2016%3A43%3A1.png?version=1&amp;modificationDate=1680170126000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396616"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2014-10-9 16:43:1.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="250" /></span>**

#### STEP 3: Create an external hard drive:

Your VM has been built with very limited hard drive space. In order to
run emulator and play video files, you need to copy your video files
into the file system for playback. For this, you will need to setup a
virtual external hard drive.

-   Select the vm instance on the main menu of Virtual Box→ Click
    Settings -&gt; Storage -&gt; Add Hard disk \[icon\] → Click
    ‘<span style="color: rgb(0,0,0);">Create new disk</span>’
    -   (Note: In the screenshot 1 below, "Choose existing disk" may
        seem highlighted. Please select "Create new disk")
-   Select VDI (VirtualBox Disk Image) as your Hard Drive file type

**<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/image2014-10-9%2018_27_42.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211787608/image2014-10-9%2018%3A27%3A42.png?version=1&amp;modificationDate=1680170126000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396617"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2014-10-9 18:27:42.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="250" /></span><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/image2014-10-9%2018_28_54.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211787608/image2014-10-9%2018%3A28%3A54.png?version=1&amp;modificationDate=1680170126000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396618"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2014-10-9 18:28:54.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="250" /></span>  
**

-   Select "Dynamically allocated" storage: 

**<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/image2014-10-9%2018_30_5.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211787608/image2014-10-9%2018%3A30%3A5.png?version=1&amp;modificationDate=1680170126000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396619"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2014-10-9 18:30:5.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="250" /></span><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/image2014-10-9%2018_29_52.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211787608/image2014-10-9%2018%3A29%3A52.png?version=1&amp;modificationDate=1680170126000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396620"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2014-10-9 18:29:52.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="250" /></span>**

#### STEP 4: Formatting and partitioning your new external hard drive:

-   Boot up your VM. Your emulator VM boots up to show the RDK Browser
    HTML application which can be used to select and launch multiple
    other applications using the Tab key & Enter key

-   Use BACKSPACE to come out of Readme, WatchTV, iHeartRadio and Sample
    Video

-   To come out of the X2 guide, use Ctrl+Backspace

-   In order to learn your VM IP, use the RDK Browser application “tab”
    key to chose the various applications. Choose Device Info which will
    provide you the IP address as shown in the screenshot below:

**<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/image2014-10-9%2018_31_22.png"
class="confluence-embedded-image" draggable="false"
data-image-src="/download/attachments/211787608/image2014-10-9%2018%3A31%3A22.png?version=1&amp;modificationDate=1680170126000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396621"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="image2014-10-9 18:31:22.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="250" /></span>**

-   Once you have the IP address you may SSH into your VM from your
    linux shell console. Use root as the ssh user.

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="5" data-resolved="" data-table-index="5">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="500"><strong>$ ssh </strong><a
href="mailto:root@x.x.x.x" class="external-link"
rel="nofollow">root@x.x.x.x</a></th>
</tr>
&#10;</tbody>
</table>

-   Use the “mount” command to see the current status of connected hard
    disks

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="6" data-resolved="" data-table-index="6">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="600"><strong>$ mount</strong></th>
</tr>
&#10;</tbody>
</table>

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/1.png" class="confluence-embedded-image"
draggable="false"
data-image-src="/download/attachments/211787608/1.png?version=1&amp;modificationDate=1680170126000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396622"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="1.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="250" /></span>

-   Use fdisk command to list out connected hard drives. You may note
    that in the screenshot below, there are two hard drives listed. hda
    and hdb. hdb is the external hard drive that we have created in the
    previous step.

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="7" data-resolved="" data-table-index="7">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="700"><strong>$ fdisk
-l</strong></th>
</tr>
&#10;</tbody>
</table>

<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/2.png" class="confluence-embedded-image"
draggable="false"
data-image-src="/download/attachments/211787608/2.png?version=1&amp;modificationDate=1680170126000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396623"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="2.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="250" /></span>

-   Use fdisk to create your new hard disk partition

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="8" data-resolved="" data-table-index="8">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="800"><strong>$ fdisk
/dev/hdb</strong></th>
</tr>
&#10;</tbody>
</table>

Review the description of the steps during fdisk operation below and the
following screenshot for reference before proceeding.

-   Use fdisk to create your new hard disk partition
    -   Use the command "n" to add a new partition**  
        **

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="9" data-resolved="" data-table-index="9">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="900"><strong>$ Command (m for
help): n</strong></th>
</tr>
&#10;</tbody>
</table>

-   -   Select partition type as the suggested default "p" for primary
        partition

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="10" data-resolved="" data-table-index="10">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="1000"><p><strong>$ Partition
type:</strong></p>
<p><strong>p primary (0 primary, 0 extended, 4 free)</strong></p>
<p><strong>e extended</strong></p>
<p>Select (default p): p</p></th>
</tr>
&#10;</tbody>
</table>

-   -   Set your partition number as the suggested default. In the
        example case: 1

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="11" data-resolved="" data-table-index="11">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="1100"><strong>$ Partition number
(1-4, default 1): 1</strong></th>
</tr>
&#10;</tbody>
</table>

-   -   Press "Enter" key for First sector & Last sector prompts
    -   Select the command "p" to print the partition table on screen
        for review

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="12" data-resolved="" data-table-index="12">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="1200"><strong>$ Command (m for
help): p</strong></th>
</tr>
&#10;</tbody>
</table>

-   -   Select the command "w" to write the partition table to disk and
        exit fdisk

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="13" data-resolved="" data-table-index="13">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="1300"><strong>$ Command (m for
help): w</strong></th>
</tr>
&#10;</tbody>
</table>

  

-   Format your newly created partition with ext3 file system

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="14" data-resolved="" data-table-index="14">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="1400"><strong>$ mkfs.ext3
/dev/hdb1</strong></th>
</tr>
&#10;</tbody>
</table>

**<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/4.png" class="confluence-embedded-image"
draggable="false"
data-image-src="/download/attachments/211787608/4.png?version=1&amp;modificationDate=1680170126000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396624"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="4.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="250" /></span>**

-   Create a folder for mounting your new partition at /ext\_hdd
-   Mount your newly created hard disk partition to /ext\_hdd

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="15" data-resolved="" data-table-index="15">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="1500"><p><strong>$ mkdir
/ext_hdd</strong></p>
<p><strong>$ mount /dev/hdb1 /ext_hdd</strong></p></th>
</tr>
&#10;</tbody>
</table>

**<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/5.png" class="confluence-embedded-image"
draggable="false"
data-image-src="/download/attachments/211787608/5.png?version=1&amp;modificationDate=1680170126000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396625"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="5.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="250" /></span>**

#### STEP 5: Copy a Single Program Transport stream to your file system to be used for emulator video playback.

-   Pre-requisite to the step is assumed that /ext\_hdd is already
    mounted with the external hard disk partition on your emulator VM

-   Copy your SPTS video file from your host machine to /ext\_hdd folder
    on the emulator VM 

-   Note: The following command is performed from your Host Machine

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="16" data-resolved="" data-table-index="16">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="1600"><strong>$ scp
&lt;your_spts_file_name&gt;.ts
root@&lt;your_emulator_vm_ip&gt;:/ext_hdd</strong></th>
</tr>
&#10;</tbody>
</table>

-   Back on your emulator VM, create a link in /opt/www/ to point to the
    external hard drive at its mount point /ext\_hdd

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="17" data-resolved="" data-table-index="17">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="1700"><strong>$ ln -sf
/ext_hdd/&lt;your_spts_file_name&gt;
&lt;your_spts_file_name&gt;</strong></th>
</tr>
&#10;</tbody>
</table>

-   In the screenshot below, &lt;your\_spts\_file\_name&gt; is assumed
    to be "received\_spts1.ts" as an example.

**<span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"><img src="./Tryout_video_files/6.png" class="confluence-embedded-image"
draggable="false"
data-image-src="/download/attachments/211787608/6.png?version=1&amp;modificationDate=1680170126000&amp;api=v2"
data-unresolved-comment-count="0" data-linked-resource-id="254396626"
data-linked-resource-version="1" data-linked-resource-type="attachment"
data-linked-resource-default-alias="6.png"
data-base-url="https://wiki.rdkcentral.com"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="211787608"
data-linked-resource-container-version="10" height="250" /></span>**

<span style="color: rgb(0,0,0);"> </span>

### Usage Instructions

#### Logging into your VM

------------------------------------------------------------------------

As described in the previous section, you can log in to your emulator VM
from your Host Machine using the ssh command.

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="18" data-resolved="" data-table-index="18">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="1800"><strong>$ ssh
root@x.x.x.x</strong></th>
</tr>
&#10;</tbody>
</table>

\*Note: In order to learn the IP address of your VM, use the RDK Browser
application “tab” key to navigate to "Device Info" which will provide
you the IP address. Press "Enter" key to enter Device Info

#### Using rmfApp

------------------------------------------------------------------------

#### Introduction

------------------------------------------------------------------------

The rmfApp application is supported for all build types. Once you SSH
into your emulator VM, you can play a video stream located at a url
using a source and a sink.

##### Where is rmfApp?

rmfApp is located in the folder: /usr/bin on your emulator VM

##### How to run rmfApp?

Navigate to the folder /usr/bin and run rmf App using command ./rmfApp.
After the initial log statements when the rmfApp starts up, press
"Enter" key to get the rmfApp prompt - "rmfApp&gt;"

##### rmfApp Command Line Options

root@qemux86:~# rmfApp \[-source SOURCE\] \[-sink SINK\] \[other
options\] url

SOURCE can be: hnsource,qamsource

SINK can be:   mediaplayersink 

Other options include:  
•        -recordingId &lt;id&gt;: id of recording to create where
&lt;id&gt; is a decimal number  
•        -recordingTitle &lt;title&gt;: title of recording

##### Example Sequence of rmfApp usage

Before using rmfApp, it will be better to terminate rdkbrowser as it may
impact the performance of playback. You may use the systemctl command to
terminate rdkbrowser as shown below.

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="19" data-resolved="" data-table-index="19">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="1900"><span
style="color: rgb(51,51,51);">$ systemctl stop
rdkbrowser.service</span></th>
</tr>
&#10;</tbody>
</table>

rmfApp is located in the directory /usr/bin. Navigate to the directory
containing the rmfApp:

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="20" data-resolved="" data-table-index="20">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="2000"><span
style="color: rgb(51,51,51);">$ cd /usr/bin</span></th>
</tr>
&#10;</tbody>
</table>

Launch RMF App using the command below:

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="21" data-resolved="" data-table-index="21">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="2100"><span
style="color: rgb(51,51,51);">$ ./rmfApp</span></th>
</tr>
&#10;</tbody>
</table>

Once the app is launched, press enter again to get the prompt
"rmfApp-&gt;":

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="22" data-resolved="" data-table-index="22">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="2200"><span
style="color: rgb(51,51,51);">$ rmfApp-&gt;</span></th>
</tr>
&#10;</tbody>
</table>

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="23" data-resolved="" data-table-index="23">
<tbody class="ui-sortable">
<tr class="odd" data-ite-row-number="0">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="2300"><h5
id="TryOutRDK-NOTE:">NOTE:</h5></td>
</tr>
<tr class="even" data-ite-row-number="1">
<td class="confluenceTd custom-row" data-ite-col-number="0"
data-row-index="1" data-column-index="2300"><p>Note 1: There is an
additional step required prior to using the emulator because it is built
without the gsttee module in gst-plugins-rdk:</p>
<p>Before invoking rmfapp, it is necessary to set the environment
variable 'USE_GENERIC_GSTREAMER_TEE' to 'TRUE', so that mediaframework
uses the generic gsttee that is built from Open Source gstreamer: </p>
<p>example : </p>
<p>root@<a href="http://qemux86hyb/usr/bin" class="external-link"
rel="nofollow">qemux86hyb-morty:/usr/bin#</a> export
USE_GENERIC_GSTREAMER_TEE=TRUE root@<a href="http://qemux86hyb/usr/bin"
class="external-link" rel="nofollow">qemux86hyb-morty:/usr/bin#</a>
./rmfApp </p>
<p>Note 2: In the streaming scenario it is necessary to kill the
rmfStreamer process on the hybrid image, which is started automatically,
and invoke it manually as illustrated below : </p>
<p>Streaming Scenario : </p>
<p>Hybrid : </p>
<p>barracuda:~&gt; ssh <a href="mailto:root@193.120.91.104"
class="external-link" rel="nofollow">root@193.120.91.104</a></p>
<p>root@qemux86hyb-morty:/#</p>
<p>root@qemux86hyb-morty:/# export USE_GENERIC_GSTREAMER_TEE=TRUE
root@qemux86hyb-morty:/# cd /usr/bin root@<a
href="http://qemux86hyb/usr/bin" class="external-link"
rel="nofollow">qemux86hyb-morty:/usr/bin#</a> ps -aef  | grep rmf
root@<a href="http://qemux86hyb/usr/bin#kill" class="external-link"
rel="nofollow">qemux86hyb-morty:/usr/bin#kill</a> -9 &lt;pid&gt; root@<a
href="http://qemux86hyb/usr/bin" class="external-link"
rel="nofollow">qemux86hyb-morty:/usr/bin#</a> ./rmfStreamer </p>
<p>IP Client : </p>
<p>barracuda:~&gt; ssh <a href="mailto:root@193.120.91.132"
class="external-link" rel="nofollow">root@193.120.91.132</a></p>
<p>root@qemux86mc-morty:/#</p>
<p>root@qemux86mc-morty:/# export USE_GENERIC_GSTREAMER_TEE=TRUE
root@qemux86mc-morty:/# cd /usr/bin root@<a
href="http://qemux86mc/usr/bin" class="external-link"
rel="nofollow">qemux86mc-morty:/usr/bin#</a> ./rmfApp</p>
<p>rmfApp-&gt;launch -source hnsource -sink mediaplayersink</p>
<p><a
href="http://193.120.91.104:8080/vldms/tuner?ocap_locator=ocap://0x125d"
class="external-link"
rel="nofollow">http://193.120.91.104:8080/vldms/tuner?ocap_locator=ocap://0x125d</a></p></td>
</tr>
</tbody>
</table>

  

##### Simulated Live Playback on a Hybrid Emulator

------------------------------------------------------------------------

In a simulated live playback, the following rmfApp command maybe used to
playback the local SPTS video file:

launch -source qamsource -sink mediaplayersink
<a href="ocap://0x125d" rel="nofollow">ocap://0x125d</a>

Where 

-   source : qamsource
-   sink; mediaplayersink
-   url: <a href="ocap://0x125d" rel="nofollow">ocap://0x125d</a>

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="24" data-resolved="" data-table-index="24">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="2400"><span
style="color: rgb(51,51,51);">$ rmfApp-&gt; </span><span>launch –source
qamsource –sink mediaplayersink </span><a href="ocap://0x125d"
rel="nofollow">ocap://0x125d</a></th>
</tr>
&#10;</tbody>
</table>

##### Simulated Playback on a Hybrid Emulator

------------------------------------------------------------------------

<span style="color: rgb(28,28,28);">launch –source
</span><span style="color: rgb(28,28,28);">hnsource</span><span style="color: rgb(28,28,28);">
–sink
</span><span style="color: rgb(28,28,28);">mediaplayersink</span><span style="color: rgb(28,28,28);">
<a href="http://127.0.0.1:50050/received_spts1.ts" class="external-link"
rel="nofollow">http://127.0.0.1:50050/received_spts1.ts</a></span>

<span style="color: rgb(28,28,28);">Where</span>

-   <span style="color: rgb(28,28,28);">source : hnsource</span>
-   <span style="color: rgb(28,28,28);">sink : mediaplayersink</span>
-   <span style="color: rgb(28,28,28);">url
    : <a href="http://127.0.0.0:50050/received_spts1.ts" class="external-link"
    rel="nofollow">http://127.0.0.0:50050/received_spts1.ts</a> </span>

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="25" data-resolved="" data-table-index="25">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="2500"><span
style="color: rgb(51,51,51);">$ rmfApp-&gt; <span
style="color: rgb(28,28,28);">launch –source </span><span
style="color: rgb(28,28,28);">hnsource</span><span
style="color: rgb(28,28,28);"> –sink </span><span
style="color: rgb(28,28,28);">mediaplayersink</span><span
style="color: rgb(28,28,28);"> <a
href="http://127.0.0.1:50050/received_spts1.ts" class="external-link"
rel="nofollow">http://127.0.0.1:50050/received_spts1.ts</a></span></span></th>
</tr>
&#10;</tbody>
</table>

##### Simulated Live Playback on a Media Client Emulator

------------------------------------------------------------------------

<span style="color: rgb(28,28,28);"> </span>In a simulated live
playback, the following rmfApp command maybe used to playback the local
SPTS video file:

<span style="color: rgb(28,28,28);"> </span>launch –source hnsource
–sink mediaplayersink http://&lt;HYBRID
IP&gt;:8080/vldms/tuner?ocap\_locator=<a href="ocap://0x125d" style="text-decoration: underline;"
rel="nofollow">ocap://0x125d</a>

<span style="color: rgb(28,28,28);"> </span>Where <span style="color: rgb(28,28,28);"> </span>

-   source : hnsource
-   sink; mediaplayersink
-   url: http://&lt;HYBRID
    IP&gt;:8080/vldms/tuner?ocap\_locator=<a href="ocap://0x125d" style="text-decoration: underline;"
    rel="nofollow">ocap://0x125d</a>

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="26" data-resolved="" data-table-index="26">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="2600"><span
style="color: rgb(51,51,51);">$ launch –source hnsource –sink
mediaplayersink http://&lt;HYBRID
IP&gt;:8080/vldms/tuner?ocap_locator=<a href="ocap://0x125d"
style="text-decoration: underline;"
rel="nofollow">ocap://0x125d</a></span></th>
</tr>
&#10;</tbody>
</table>

##### Scheduling & Playing Back Recordings from the Media Client using Recording ID

------------------------------------------------------------------------

<span style="color: rgb(28,28,28);">RDK recordings on the Hybrid device
are created from a cloud-based scheduler using json messages. Once the
recordings are created, the rmfApp on the media client device can be
used to playback the newly recorded media content. </span>

<span style="color: rgb(28,28,28);">This section outlines the use
case:</span>

<span style="color: rgb(28,28,28);">Step 1: Preconditions /
Prerequisites: </span>

-   <span style="color: rgb(28,28,28);">As the hybrid VM has very
    limited memory and as recordings are by default stored in
    /opt/data/, you should create a new directory /ext\_hdd/data within
    the external hard drive that we had set up earlier and also create a
    soft link to /opt/data</span>

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="27" data-resolved="" data-table-index="27">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="2700"><p>mkdir -p
/ext_hdd/data</p>
<p>ln -sf /ext_hdd/data /opt/data</p></th>
</tr>
&#10;</tbody>
</table>

<span style="color: rgb(28,28,28);">**\*Note**: </span><span style="color: rgb(28,28,28);">The
above directory and the soft link needs to be in place each time before
scheduling recordings. </span>

<span style="color: rgb(28,28,28);"> </span><span style="color: rgb(28,28,28);">Your
recordings will get created in the following path on the Hybrid
VM:</span>

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="28" data-resolved="" data-table-index="28">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0"
data-column-index="2800"><p>/opt/data/OCAP_MSV/0/0/DEFAULT_RECORDING_VOLUME/test</p>
<p>/opt/data/OCAP_MSV/0/0/DEFAULT_RECORDING_VOLUME/test/chunks</p></th>
</tr>
&#10;</tbody>
</table>

If there is a media file created in the /chunks folder above, then the
recordings have been successfully created.

<span style="color: rgb(28,28,28);">Step 2: Launching rmfStreamer on
Hybrid VM</span>

<span style="color: rgb(28,28,28);">There are multiple scripts in the
folder /usr/bin. There are two scripts for launching rmfStreamer:</span>

-   <span style="color: rgb(28,28,28);">rmfstreamer</span>
-   <span style="color: rgb(28,28,28);">rmfStreamer</span>

<span style="color: rgb(28,28,28);">Note that the name of each file is
similar apart from the usage of upper case and lowercase "s" in each
file name.</span>

<span style="color: rgb(28,28,28);">Launch rmfStreamer using the script:
**rmfstreamer**</span>

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="29" data-resolved="" data-table-index="29">
<colgroup>
<col style="width: 100%" />
</colgroup>
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="2900"><p>cd /usr/bin/</p>
<p>sh rmfstreamer</p></th>
</tr>
&#10;</tbody>
</table>

<span style="color: rgb(28,28,28);">if you run in into issues accessing
rmfstreamer, then change the access permissions of file
appropriately:</span>

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="30" data-resolved="" data-table-index="30">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="3000"><p>chmod 777
rmfstreamer</p></th>
</tr>
&#10;</tbody>
</table>

Once rmfStreamer starts, you will see log print statements on the
console.

<span style="color: rgb(28,28,28);">Step 3: Start playback of recorded
content on Hybrid emulator from your Media Client emulator</span>

Now you can playback from the media client using the rmfApp on the media
client VM using the following sample commands:

<table
class="wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table"
data-ite-table-index="31" data-resolved="" data-table-index="31">
<tbody class="ui-sortable">
<tr class="header" data-ite-row-number="0">
<th class="confluenceTh custom-row" data-ite-col-number="0"
data-row-index="0" data-column-index="3100"><p>cd /usr/bin</p>
<p>./rmfApp</p>
<p>rmfApp&gt; launch -source hnsource -sink mediaplayersink
http://&lt;hybird_vm_ip&gt;:8080/vldms/test?rec_id=6</p></th>
</tr>
&#10;</tbody>
</table>

**Note:** Where the recording id is "6" as set in the schedule.json
message from the server. Users may write a small application to simulate
the scheduler server json messages.

#### <u>Prerequisites:</u>

##### Changes needed to be done in the meta layers.

  

Meta Layer

Recipe

Change

1

meta-rdk-bsp-emulator

meta-rdk-bsp-emulator/recipes-qt/qt5/qtbase\_5.1.1.bbappend

diff --git a/recipes-qt/qt5/qtbase\_5.1.1.bbappend
b/recipes-qt/qt5/qtbase\_5.1.1.bbappend  
index a6bf466..c675286 100644  
--- a/recipes-qt/qt5/qtbase\_5.1.1.bbappend  
+++ b/recipes-qt/qt5/qtbase\_5.1.1.bbappend  
@@ -24,6 +24,9 @@ SRC\_URI\_remove =
"<a href="file://0005-qmake-is-already-built-in-qtbase-native.patch/"
class="external-link"
rel="nofollow">file://0005-qmake-is-already-built-in-qtbase-native.patch</a>"  
 PACKAGECONFIG\_remove = "fontconfig"  
   
 SRC\_URI\_append\_morty = "
<a href="file://disable-qmakefor-morty.patch/" class="external-link"
rel="nofollow">file://disable-qmakefor-morty.patch</a>"  
+SRC\_URI\_append\_dunfell = "
<a href="file://disable-qmakefor-morty.patch/" class="external-link"
rel="nofollow">file://disable-qmakefor-morty.patch</a>"  
+  
  EXTRA\_OECONF\_append = " -qpa eglfs"  
   
@@ -38,6 +41,9 @@ do\_install\_append\_morty() {  
 RDEPENDS\_${PN}\_append = " libegl-gallium mesa-driver-swrast"  
   
 RDEPENDS\_${PN}\_remove\_morty = "libegl-gallium"  
+RDEPENDS\_${PN}\_remove\_dunfell = "libegl-gallium"  
+   
 PACKAGECONFIG\[zlib\] = "-qt-zlib,zlib"

meta-rdk-bsp-emulator/recipes-graphics/westeros/westeros.bbappend

From CXXFLAGS\_append\_dunfell = " DUSE\_MESA"  
To  
CXXFLAGS\_append\_dunfell = " -DUSE\_MESA"

meta-rdk-bsp-emulator/conf/layer.conf

Add 

BBMASK .=
"|meta-rdk-restricted/recipes-extended/closedcaption/<a href="http://closedcaption-hal-headers_git.bb/" class="external-link"
rel="nofollow">closedcaption-hal-headers_git.bb</a>"  
BBMASK .=
"|meta-rdk-restricted/recipes-extended/closedcaption/<a href="http://closedcaption_git.bb/" class="external-link"
rel="nofollow">closedcaption_git.bb</a>"

meta-rdk-bsp-emulator/recipes-graphics/directfb/directfb\_%.bbappend

Add

DEPENDS\_remove\_dunfell = "linux-fusion"  
RDEPENDS\_${PN}\_remove\_dunfell = "kernel-module-fusion"  
EXTRA\_OECONF\_remove\_dunfell = "--enable-multi"

2

  

build-qemux86mc-dunfell/conf/local.conf

1.  Modified the line from require
    conf/distro/include/##RDK\_FLAVOR##.inc to   
    require conf/distro/include/rdkv.inc

2\. Add these masks (if already present, ignore)

BBMASK .=
"|meta-rdk/recipes-support/base64/<a href="http://base64_git.bb/" class="external-link"
rel="nofollow">base64_git.bb</a>"  
BBMASK .=
"|meta-rdk-video/recipes-extended/ctrlm/<a href="http://ctrlm-xraudio-hal.bb/" class="external-link"
rel="nofollow">ctrlm-xraudio-hal.bb</a>"  
BBMASK .=
"|meta-rdk-ext/recipes-devtools/brotli/<a href="http://brotli_git.bb/" class="external-link"
rel="nofollow">brotli_git.bb</a>"  
BBMASK .=
"|meta-rdk-voice-sdk/recipes-support/xr-fdc/<a href="http://xr-fdc.bb/" class="external-link"
rel="nofollow">xr-fdc.bb</a>"  
BBMASK .= "|meta-rdk-voice-sdk/recipes-xraudio"  
BBMASK .=
"|meta-rdk-voice-sdk/recipes-xraudio/xraudio/<a href="http://xraudio_1.0.bb/" class="external-link"
rel="nofollow">xraudio_1.0.bb</a>"  
BBMASK .=
"|openembedded-core/meta/recipes-multimedia/gstreamer/<a href="http://gstreamer1.0-plugins-good_1.16.3.bb/"
class="external-link"
rel="nofollow">gstreamer1.0-plugins-good_1.16.3.bb</a>"

3

  

meta-rdk/recipes-core/packagegroups/<a href="http://packagegroup-rdk-media-common.bb/" class="external-link"
rel="nofollow">packagegroup-rdk-media-common.bb</a>

RDEPENDS\_packagegroup-rdk-media-common = "\\  
    ${CLOSEDCAPTION} \\ ====Remove this line

4

  

meta-rdk-bsp-emulator/recipes-extended/closedcaption/<a href="http://closedcaption-hal_git.bb/" class="external-link"
rel="nofollow">closedcaption-hal_git.bb</a>

DEPENDS = "closedcaption-hal-headers" ==== Comment the line

5

  

meta-rdk-restricted/recipes-extended/mediaframework/<a href="http://rmfapp_git.bb/" class="external-link"
rel="nofollow">rmfapp_git.bb</a>

Commend the line   
RMFAPP\_MEDIACLIENT\_DEPENDS += "closedcaption"  
  

6

  

meta-rdk-bsp-emulator/recipes-extended/mediaframework/rmfapp\_git.bbappend

Comment the line   
RMFAPP\_MEDIACLIENT\_DEPENDS += "closedcaption"

7

  

meta-rdk/recipes-core/packagegroups/<a href="http://packagegroup-rdk-mediaclient.bb/" class="external-link"
rel="nofollow">packagegroup-rdk-mediaclient.bb</a>

RDEPENDS\_packagegroup-rdk-generic-mediaclient = "\\  
    dnsmasq \\  
    ${@bb.utils.contains("WEBBACKENDS", "rdkbrowser", "rdkbrowser
rdkbrowser-webserver", "", d)} \\  
    tr69agent \\  === remove this line

8

  

meta-cmf-video/recipes-xraudio/xraudio/xraudio\_1.0.bbappend

Remove ctrlm-xraudio-hal  from the line

DEPENDS\_append = " ctrlm-xraudio-hal jansson"

9

  

conf/bblayers.conf 

Add the following lines at the end  
BBLAYERS =+ "${RDKROOT}/meta-rdk-bsp-emulator"  
BBLAYERS =+ "${RDKROOT}/meta-cmf-bsp-emulator"  
BBLAYERS =+ "${RDKROOT}/meta-openembedded/meta-initramfs"

10

  

meta-rdk-bsp-emulator/conf/machine/qemux86mc-dunfell.conf

  

Note: copy the file
meta-rdk-bsp-emulator/conf/machine/qemux86mc-morty.conf and name it as
above and make these changes

Add the following lines

\# Disable Vc4 graphics  
DISABLE\_VC4GRAPHICS = "1"  
DISTRO\_FEATURES\_append = " rdkshell offline\_apps"  
DISTRO\_FEATURES\_append = " cobalt-plugin"  
\# no more onscreen terminal required for RDK service  
DISTRO\_FEATURES\_append = " systemd-disable-getty"  
\# for spark  
DISTRO\_FEATURES\_append = " spark"  
DISTRO\_FEATURES\_append = " wifi bluez5 bluetooth"

Update the gstreamer version from 1.14.0 to 1.16.3

PREFERRED\_VERSION\_gstreamer1.0 = "1.16.3"  
PREFERRED\_VERSION\_gstreamer1.0-libav = "1.16.3"  
PREFERRED\_VERSION\_gstreamer1.0-plugins-bad = "1.16.3"  
PREFERRED\_VERSION\_gstreamer1.0-plugins-base = "1.16.3"  
PREFERRED\_VERSION\_gstreamer1.0-plugins-good = "1.16.3"  
PREFERRED\_VERSION\_gstreamer1.0-omx = "1.16.3"

Update

MACHINEOVERRIDES .= ":dunfell"

Update plymouth version from 0.8.8 to 0.9.%

PREFERRED\_VERSION\_plymouth ?= "0.9.%"

11

  

meta-rdk-bsp-emulator/recipes-core/packagegroups/packagegroup-rdk-baserootfs.bbappend

Note: If packages is not present in the above file, search in the
following line:

meta-rdk/recipes-core/packagegroups/<a href="http://packagegroup-rdk-baserootfs.bb/" class="external-link"
rel="nofollow">packagegroup-rdk-baserootfs.bb</a>

Insert "closedcaption-hal \\ in the PACKAGES at the top

12

  

meta-rdk/recipes-core/packagegroups/<a href="http://packagegroup-rdk-media-common.bb/" class="external-link"
rel="nofollow">packagegroup-rdk-media-common.bb</a>

Insert  closedcapton in the PACKAGES

PACKAGES = "\\  
    closedcaption \\  
    packagegroup-rdk-media-common \\

13

  

meta-rdk-bsp-emulator/conf/machine/include/qemux86-soc.inc

If the following line is not present, add it at last:

IMAGE\_FEATURES\_remove\_morty = "read-only-rootfs"

Add the following line as well:

IMAGE\_FEATURES\_remove\_dunfell = "read-only-rootfs"

14

  

meta-rdk-video/recipes-extended/iarmmgrs/<a href="http://iarmmgrs_git.bb/" class="external-link"
rel="nofollow">iarmmgrs_git.bb</a>

Comment the below line

RDEPENDS\_${PN}\_dunfell += "${VIRTUAL-RUNTIME\_mfrlib} devicesettings"

  

Add the following line

<span style="color: rgb(36,36,36);">INSANE\_SKIP\_${PN} +=
"file-rdeps" </span>

15

  

meta-rdk-video/recipes-multimedia/gstreamer/<a href="http://gst-plugins-rdk_git.bb/" class="external-link"
rel="nofollow">gst-plugins-rdk_git.bb</a>

Comment the below line

RDEPENDS\_${PN}\_dunfell += "${VIRTUAL-RUNTIME\_dtcpmgr}"

16

  

meta-cmf/recipes-graphics/directfb/linux-fusion\_9.0.3.bbappend

Remove the line below

<a href="file://user_msghdr.patch/" class="external-link"
rel="nofollow">file://user_msghdr.patch</a> \\  

17

  

meta-rdk-ext/recipes-graphics/directfb/directfb\_%.bbappend

DEPENDS\_remove\_dunfell = "linux-fusion"  
RDEPENDS\_${PN}\_remove\_dunfell = "kernel-module-fusion"  
EXTRA\_OECONF\_remove\_dunfell = "--enable-multi"

18

  

meta-cmf/recipes-core/packagegroups/packagegroup-rdk-media-common.bbappend

Comment the following lines

RDEPENDS\_packagegroup-rdk-media-common\_append = " xraudio-utils"

RDEPENDS\_packagegroup-rdk-media-common\_append = " ctrlm-main"

19

  

meta-rdk-restricted/recipes-extended/mediaframework/<a href="http://rmfgeneric_git.bb/" class="external-link"
rel="nofollow">rmfgeneric_git.bb</a>

Comment the following line

RDEPENDS\_${PN}\_dunfell += "${VIRTUAL-RUNTIME\_dtcpmgr}"

20

  

meta-rdk-video/recipes-extended/sysint/<a href="http://sysint_git.bb/" class="external-link"
rel="nofollow">sysint_git.bb</a>

Rename line 306: do\_install\_append\_hybrid as do\_install\_append

21

  

<span style="color: rgb(36,36,36);">meta-cmf-bsp-emulator/conf/include/rdk-bbmasks-rdkb-platform.inc</span>

Comment the following lines:

BBMASK .=
"|meta-rdk-bsp-emulator/recipes-extended/devicesettings/<a href="http://devicesettings-hal-emulator_git.bb/"
class="external-link"
rel="nofollow">devicesettings-hal-emulator_git.bb</a>"

BBMASK .=
"|meta-rdk-bsp-emulator/recipes-extended/iarmmgrs/<a href="http://iarmmgrs-hal-emulator_git.bb/" class="external-link"
rel="nofollow">iarmmgrs-hal-emulator_git.bb</a>"

BBMASK .=
"|meta-rdk-bsp-emulator/recipes-extended/gst-plugins-playersinkbin/<a href="http://gst-plugins-playersinkbin-emulator_git.bb/"
class="external-link"
rel="nofollow">gst-plugins-playersinkbin-emulator_git.bb</a>"

BBMASK .=
"|meta-rdk-bsp-emulator/recipes-oem/mfrlib/<a href="http://mfrlib-emulator_1.0.bb/" class="external-link"
rel="nofollow">mfrlib-emulator_1.0.bb</a>"

  

#### <u>Errors and Fixes:</u>

<table
class="relative-table wrapped confluenceTable ite-marked-table ite-real-table iteWrappableTable custom-ite-table tablesorter tablesorter-default"
style="width: 100.0%;" data-ite-table-index="33" data-resolved=""
data-table-index="33" role="grid">
<colgroup>
<col style="width: 2%" />
<col style="width: 20%" />
<col style="width: 47%" />
<col style="width: 24%" />
<col style="width: 5%" />
</colgroup>
<thead>
<tr class="header tablesorter-headerRow" data-ite-row-number="0"
role="row">
<th
class="confluenceTh custom-row tablesorter-header sortableHeader tablesorter-headerUnSorted"
style="text-align: left; user-select: none;" data-ite-col-number="0"
data-row-index="0" data-column-index="3300" data-column="0" tabindex="0"
scope="col" role="columnheader" aria-disabled="false"
data-unselectable="on" aria-sort="none"
aria-label=": No sort applied, activate to apply an ascending sort"><div
class="tablesorter-header-inner">
<br />
&#10;</div></th>
<th
class="confluenceTh custom-row tablesorter-header sortableHeader tablesorter-headerUnSorted"
style="text-align: left; user-select: none;" data-ite-col-number="1"
data-row-index="0" data-column-index="3301" data-column="1" tabindex="0"
scope="col" role="columnheader" aria-disabled="false"
data-unselectable="on" aria-sort="none"
aria-label="Source File: No sort applied, activate to apply an ascending sort"><div
class="tablesorter-header-inner">
<p>Source File</p>
</div></th>
<th
class="confluenceTh custom-row tablesorter-header sortableHeader tablesorter-headerUnSorted"
style="text-align: left; user-select: none;" data-ite-col-number="2"
data-row-index="0" data-column-index="3302" data-column="2" tabindex="0"
scope="col" role="columnheader" aria-disabled="false"
data-unselectable="on" aria-sort="none"
aria-label="Error/ Warning: No sort applied, activate to apply an ascending sort"><div
class="tablesorter-header-inner">
<p>Error/ Warning</p>
</div></th>
<th
class="confluenceTh custom-row tablesorter-header sortableHeader tablesorter-headerUnSorted"
style="text-align: left; user-select: none;" data-ite-col-number="3"
data-row-index="0" data-column-index="3303" data-column="3" tabindex="0"
scope="col" role="columnheader" aria-disabled="false"
data-unselectable="on" aria-sort="none"
aria-label="Fix: No sort applied, activate to apply an ascending sort"><div
class="tablesorter-header-inner">
<p>Fix</p>
</div></th>
<th
class="confluenceTh custom-row tablesorter-header sortableHeader tablesorter-headerUnSorted"
style="text-align: left; user-select: none;" data-ite-col-number="4"
data-row-index="0" data-column-index="3304" data-column="4" tabindex="0"
scope="col" role="columnheader" aria-disabled="false"
data-unselectable="on" aria-sort="none"
aria-label="Code Review : No sort applied, activate to apply an ascending sort"><div
class="tablesorter-header-inner">
<p>Code Review </p>
</div></th>
</tr>
</thead>
<tbody class="ui-sortable" aria-live="polite" aria-relevant="all">
<tr class="odd" data-ite-row-number="1" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="1"
data-column-index="3300">1</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="1"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="1"
data-column-index="3302"><p>ERROR: sysint-1.99-r0 do_fetch: Fetcher
failure for URL: '<a href="file://xi-xconf-hosts_qemux86.list/"
class="external-link"
rel="nofollow">file://xi-xconf-hosts_qemux86.list</a>'. Unable to fetch
URL from any source.<br />
ERROR: Logfile of failure stored in:
/home/dsrava434/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/sysint/1.99-r0/temp/log.do_fetch.2603462<br />
ERROR: Task
(/home/dsrava434/dunfell/meta-rdk-video/recipes-extended/sysint/<a
href="http://sysint_git.bb/" class="external-link"
rel="nofollow">sysint_git.bb</a>:do_fetch) failed with exit code
'1'</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="1"
data-column-index="3303">Renamed the file in the path
meta-cmf-restricted/recipes-extended/sysint/sysint/qemux86 from
xconf-hosts_qemux86.list to xi-xconf-hosts_qemux86.list.</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="1"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="2" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="2"
data-column-index="3300">2</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="2"
data-column-index="3301">qtbase-opensource-src-5.1.1/src/gui/opengl/qopengl.h</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="2"
data-column-index="3302"><p>/qtbase/5.1.1-r0/qtbase-opensource-src-5.1.1/src/plugins/platforms/kms/qkmsintegration.cpp:45:<br />
|
../../../../include/QtGui/../../../qtbase-opensource-src-5.1.1/src/gui/opengl/qopengl.h:
At global scope:<br />
|
../../../../include/QtGui/../../../qtbase-opensource-src-5.1.1/src/gui/opengl/qopengl.h:97:17:
error: conflicting declaration 'typedef GLfloat GLdouble'</p>
<p>|       |                 ^~~~~~~~<br />
| In file included from
/home/dsrava434/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/qtbase/5.1.1-r0/qtbase-opensource-src-5.1.1/src/plugins/platforms/kms/qkmsscreen.h:59,<br />
|                  from
/home/dsrava434/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/qtbase/5.1.1-r0/qtbase-opensource-src-5.1.1/src/plugins/platforms/kms/qkmscontext.cpp:42:<br />
|
/home/dsrava434/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/qtbase/5.1.1-r0/recipe-sysroot/usr/include/GLES2/gl2ext.h:3092:16:
note: previous declaration as 'typedef double GLdouble'<br />
|  3092 | typedef double Gldouble;</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="2"
data-column-index="3303"><p>open
build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/qtbase/5.1.1-r0/recipe-sysroot/usr/include/GLES2/gl2ext.h</p>
<p>edit this data type. in line no. 3092</p>
<p>typedef double GLdouble; =======&gt; change double to
GLfloat</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="2"
data-column-index="3304"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="3" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="3"
data-column-index="3300">3</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="3"
data-column-index="3301"><span
style="color: rgb(23,43,77);">build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/westeros-sink/1.0+gitrAUTOINC+acd6993e55-r0/recipe-sysroot-native/usr/bin/aclocal</span></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="3" data-column-index="3302">|
autoreconf: <a href="http://configure.ac/" class="external-link"
rel="nofollow">configure.ac</a>: not using Gettext<br />
| autoreconf: running: aclocal
–system-acdir=/home/dsrava434/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/westeros-sink/1.0+gitrAUTOINC+3cfeed5212-r0/recipe-sysroot/usr/share/aclocal/<br />
 --automake-acdir=/home/dsrava434/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/westeros-sink/1.0+gitrAUTOINC+3cfeed5212-r0/recipe-sysroot-native/usr/share/aclocal-1.16
-I<br />
 /home/dsrava434/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/westeros-sink/1.0+gitrAUTOINC+3cfeed5212-r0/recipe-sysroot-native/usr/share/aclocal/
--force<br />
| aclocal: error: couldn't open directory 'cfg': No such file or
directory<br />
| autoreconf: aclocal failed with exit status: 1</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="3"
data-column-index="3303"><p>Open the source file and update the
following</p>
<p>my $message = "couldn't open directory '$m4dir': $!";</p>
<p>          # if ($err_level == SCAN_M4_DIRS_ERROR)<br />
          # {<br />
          #   fatal $message;<br />
          # }<br />
          #elsif ($err_level == SCAN_M4_DIRS_WARN)<br />
          if ($err_level == SCAN_M4_DIRS_WARN)<br />
            {<br />
              msg ('unsupported', $message);<br />
              next;<br />
            }<br />
          elsif ($err_level == SCAN_M4_DIRS_SILENT)<br />
            {<br />
              next; # Silently ignore.<br />
            }<br />
          else<br />
            {<br />
                    #  prog_error "invalid \$err_level value
'$err_level'";<br />
            }</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="3"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="4" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="4"
data-column-index="3300">4</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="4"
data-column-index="3301">openembedded-core/meta/classes/insane.bbclass</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="4"
data-column-index="3302"><p>WARNING: qtbase-5.1.1-r0 do_package_qa: QA
Issue: qtbase: /usr/share/fonts/helvetica_240_50i.qpf is owned by uid
1002, which is the same as the user running bitbake. This may be due to
host contamination [host-user-contaminated]<br />
WARNING: qtbase-5.1.1-r0 do_package_qa: QA Issue: qtbase-qmlplugins-dbg:
found library in wrong location:
/usr/share/qt5/examples/widgets/tools/echoplugin/plugin/.debug/<a
href="http://libechoplugin.so/" class="external-link"
rel="nofollow">libechoplugin.so</a><br />
qtbase-qmlplugins-dbg: found library in wrong location:
/usr/share/qt5/examples/widgets/tools/plugandpaint/plugins/.debug/<a
href="http://libpnp_extrafilters.so/" class="external-link"
rel="nofollow">libpnp_extrafilters.so</a><br />
qtbase-qmlplugins-dbg: found library in wrong location:
/usr/share/qt5/examples/widgets/tools/styleplugin/styles/.debug/<a
href="http://libsimplestyleplugin.so/" class="external-link"
rel="nofollow">libsimplestyleplugin.so</a><br />
qtbase-examples-dev: found library in wrong location:
/usr/share/qt5/examples/widgets/tools/echoplugin/plugin/<a
href="http://libechoplugin.so/" class="external-link"
rel="nofollow">libechoplugin.so</a><br />
qtbase-examples-dev: found library in wrong location:
/usr/share/qt5/examples/widgets/tools/plugandpaint/plugins/<a
href="http://libpnp_extrafilters.so/" class="external-link"
rel="nofollow">libpnp_extrafilters.so</a><br />
qtbase-examples-dev: found library in wrong location:
/usr/share/qt5/examples/widgets/tools/styleplugin/styles/<a
href="http://libsimplestyleplugin.so/" class="external-link"
rel="nofollow">libsimplestyleplugin.so</a> [libdir]<br />
NOTE: recipe qtbase-5.1.1-r0: task do_package_qa: Failed<br />
NOTE: Tasks Summary: Attempted 5678 tasks of which 5675 didn't need to
be rerun and 3 failed.<br />
NOTE: Writing buildhistory<br />
NOTE: Writing buildhistory took: 2 seconds</p>
<p><br />
</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="4"
data-column-index="3303"><p><br />
</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="4"
data-column-index="3304"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="5" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="5"
data-column-index="3300">5</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="5"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="5"
data-column-index="3302">ERROR: qtbase-5.1.1-r0 do_package_qa: QA Issue:
Architecture did not match (x86-64, expected x86) on
/work/core2-32-rdk-linux/qtbase/5.1.1-r0/packages-split/qtbase/usr/bin/qmake
[arch]<br />
ERROR: qtbase-5.1.1-r0 do_package_qa: QA Issue: /usr/bin/qmake contained
in package qtbase requires <a href="http://libgcc_s.so/"
class="external-link" rel="nofollow">libgcc_s.so</a>.1(GCC_3.0)(64bit),
but no providers found in RDEPENDS_qtbase? [file-rdeps]<br />
ERROR: qtbase-5.1.1-r0 do_package_qa: QA Issue: /usr/bin/qmake contained
in package qtbase requires <a href="http://libm.so/"
class="external-link" rel="nofollow">libm.so</a>.6(GLIBC_2.2.5)(64bit),
but no providers found in RDEPENDS_qtbase? [file-rdeps]<br />
ERROR: qtbase-5.1.1-r0 do_package_qa: QA Issue: /usr/bin/qmake contained
in package qtbase requires libstdc++.so.6(CXXABI_1.3.8)(64bit), but no
providers found in RDEPENDS_qtbase? [file-rdeps]<br />
ERROR: qtbase-5.1.1-r0 do_package_qa: QA Issue: /usr/bin/qmake contained
in package qtbase requires libstdc++.so.6(CXXABI_1.3.9)(64bit), but no
providers found in RDEPENDS_qtbase? [file-rdeps]<br />
ERROR: qtbase-5.1.1-r0 do_package_qa: QA Issue: /usr/bin/qmake contained
in package qtbase requires libstdc++.so.6(CXXABI_1.3)(64bit), but no
providers found in RDEPENDS_qtbase? [file-rdeps]<br />
ERROR: qtbase-5.1.1-r0 do_package_qa: QA Issue: /usr/bin/qmake contained
in package qtbase requires libstdc++.so.6(GLIBCXX_3.4)(64bit), but no
providers found in RDEPENDS_qtbase? [file-rdeps]<br />
ERROR: qtbase-5.1.1-r0 do_package_qa: QA Issue: /usr/bin/qmake contained
in package qtbase requires <a href="http://libc.so/"
class="external-link" rel="nofollow">libc.so</a>.6(GLIBC_2.4)(64bit),
but no providers found in RDEPENDS_qtbase? [file-rdeps]<br />
ERROR: qtbase-5.1.1-r0 do_package_qa: QA Issue: /usr/bin/qmake contained
in package qtbase requires <a href="http://libc.so/"
class="external-link" rel="nofollow">libc.so</a>.6(GLIBC_2.14)(64bit),
but no providers found in RDEPENDS_qtbase? [file-rdeps]<br />
ERROR: qtbase-5.1.1-r0 do_package_qa: QA Issue: /usr/bin/qmake contained
in package qtbase requires <a href="http://libc.so/"
class="external-link" rel="nofollow">libc.so</a>.6(GLIBC_2.3)(64bit),
but no providers found in RDEPENDS_qtbase? [file-rdeps]<br />
ERROR: qtbase-5.1.1-r0 do_package_qa: QA Issue: /usr/bin/qmake contained
in package qtbase requires <a href="http://libc.so/"
class="external-link" rel="nofollow">libc.so</a>.6(GLIBC_2.2.5)(64bit),
but no providers found in RDEPENDS_qtbase? [file-rdeps]<br />
ERROR: qtbase-5.1.1-r0 do_package_qa: QA Issue: /usr/bin/qmake contained
in package qtbase requires <a href="http://libc.so/"
class="external-link" rel="nofollow">libc.so</a>.6(GLIBC_2.3.4)(64bit),
but no providers found in RDEPENDS_qtbase? [file-rdeps]<br />
ERROR: qtbase-5.1.1-r0 do_package_qa: QA Issue: /usr/bin/qmake contained
in package qtbase requires libstdc++.so.6()(64bit), but no providers
found in RDEPENDS_qtbase? [file-rdeps]<br />
ERROR: qtbase-5.1.1-r0 do_package_qa: QA Issue: /usr/bin/qmake contained
in package qtbase requires <a href="http://libm.so/"
class="external-link" rel="nofollow">libm.so</a>.6()(64bit), but no
providers found in RDEPENDS_qtbase? [file-rdeps]<br />
ERROR: qtbase-5.1.1-r0 do_package_qa: QA Issue: /usr/bin/qmake contained
in package qtbase requires <a href="http://libgcc_s.so/"
class="external-link" rel="nofollow">libgcc_s.so</a>.1()(64bit), but no
providers found in RDEPENDS_qtbase? [file-rdeps]<br />
ERROR: qtbase-5.1.1-r0 do_package_qa: QA Issue: /usr/bin/qmake contained
in package qtbase requires <a href="http://libc.so/"
class="external-link" rel="nofollow">libc.so</a>.6()(64bit), but no
providers found in RDEPENDS_qtbase? [file-rdeps]</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="5"
data-column-index="3303"><p>open this recipe
meta-rdk-bsp-emulator/recipes-qt/qt5/qtbase_5.1.1.bbappend</p>
<p>do_install_append_morty() { =====&gt; change morty to dunfell<br />
    rm ${D}/${bindir}/qmake<br />
}</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="5"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="6" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="6"
data-column-index="3300">6</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="6"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="6" data-column-index="3302">from
DerivedSources/WebCore/unified-sources/UnifiedSource74.cpp:1:<br />
DerivedSources/ForwardingHeaders/wtf/CheckedArithmetic.h:568:20: note:
because 'WTF::Checked&lt;unsigned int&gt;' has user-provided 'const
WTF::Checked&lt;T, OverflowHandler&gt;&amp; WTF::Checked&lt;T,
OverflowHandler&gt;::operator=(WTF::Checked&lt;T, OverflowHandler&gt;)
[with T = unsigned int; OverflowHandler = WTF::CrashOnOverflow]'<br />
568 | const Checked&amp; operator=(Checked rhs)<br />
| ^~~~~~~~<br />
DerivedSources/ForwardingHeaders/wtf/CheckedArithmetic.h:831:173: note:
initializing argument 1 of 'WTF::Checked&lt;typename WTF::Result&lt;U,
V&gt;::ResultType, OverflowHandler&gt; WTF::operator*(WTF::Checked&lt;U,
OverflowHandler&gt;, V) [with U = unsigned int; V = unsigned int;
OverflowHandler = WTF::CrashOnOverflow; typename WTF::Result&lt;U,
V&gt;::ResultType = unsigned int]'<br />
831 | template &lt;typename U, typename V, typename OverflowHandler&gt;
static inline Checked&lt;typename Result&lt;U, V&gt;::ResultType,
OverflowHandler&gt; operator*(Checked&lt;U, OverflowHandler&gt; lhs, V
rhs)<br />
| ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~<br />
ninja: build stopped: subcommand failed.</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="6"
data-column-index="3303"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="6"
data-column-index="3304"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="7" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="7"
data-column-index="3300">7</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="7"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="7" data-column-index="3302">In
member function 'virtual void
WebCore::MediaPlayerPrivateGStreamer::updateStates()':<br />
/home/dsrava434/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/wpe-webkit/2.22.2+gitAUTOINC+22d6522031-r0/git/Source/WebCore/platform/graphics/gstreamer/MediaPlayerPrivateGStreamer.cpp:2195:28:
error: 'm_streamPrivate' was not declared in this scope; did you mean
'GIOStreamPrivate'?<br />
2195 | m_readyState = m_streamPrivate ? MediaPlayer::HaveCurrentData :
MediaPlayer::HaveEnoughData;<br />
| ^~~~~~~~~~~~~~~<br />
| GIOStreamPrivate</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="7"
data-column-index="3303"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="7"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="8" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="8"
data-column-index="3300">8</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="8"
data-column-index="3301">Updated the Makefile to unclude proper
directories</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="8" data-column-index="3302">File
missing errors for linux/linkage.h, inux/types.h, linux/stddef.h,
linux/limits.h , linux/bitops.h </td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="8"
data-column-index="3303"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="8"
data-column-index="3304"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="9" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="9"
data-column-index="3300">9</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="9"
data-column-index="3301">build-qemux86mc-dunfell/tmp/work-shared/qemux86mc-dunfell/kernel-source/scripts/Makefile</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="9"
data-column-index="3302"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="9" data-column-index="3303">From
HOSTCFLAGS_extract-cert.o = $(CRYPTO_CFLAGS) <br />
To<br />
HOSTCFLAGS_extract-cert.o = $(CRYPTO_CFLAGS)
-I$(srctree)/include/uapi/linux</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="9"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="10" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="10"
data-column-index="3300">10</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="10"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="10"
data-column-index="3302">Error : |
/home/dsrava434/dunfell/build-qemux86mc-dunfell/tmp/hosttools/ld: cannot
find -lcrypto<br />
| collect2: error: ld returned 1 exit status<br />
| scripts/Makefile.host:107: recipe for target 'scripts/extract-cert'
failed</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="10"
data-column-index="3303"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="10"
data-column-index="3304"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="11" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="11"
data-column-index="3300">11</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="11"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="11" data-column-index="3302">|
util-linux/mount.c:253:11: fatal error: rpc/rpc.h: No such file or
directory</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="11"
data-column-index="3303"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="11"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="12" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="12"
data-column-index="3300">12</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="12"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="12"
data-column-index="3302"> home/dsrava434/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/iarmmgrs/1.99-r0/recipe-sysroot/usr/include/libsafec
 | irMgrMain.c:52:10: fatal error: cap.h: No such file or
directory<br />
|    52 | #include "cap.h"<br />
|       |          ^~~~~~~<br />
| compilation terminated.<br />
| Makefile:132: recipe for target 'irMgrMain.o' failed<br />
| make: *** [irMgrMain.o] Error 1<br />
| make: Leaving directory
'/home/dsrava434/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/iarmmgrs/1.99-r0/git/ir'<br />
| ERROR: oe_runmake failed<br />
ERROR: Execution of
'/home/dsrava434/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/iarmmgrs/1.99-r0/temp/run.do_compile.3085602'
failed with exit code 1:<br />
|| WARNING: exit code 1 from a shell command.<br />
|<br />
NOTE: recipe iarmmgrs-1.99-r0: task do_compile: Failed</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="12"
data-column-index="3303"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="12"
data-column-index="3304"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="13" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="13"
data-column-index="3300">13</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="13"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="13" data-column-index="3302">|
DerivedSources/ForwardingHeaders/wtf/CheckedArithmetic.h:831:173: note:
  initializing argument 1 of 'WTF::Checked&lt;typename WTF::Result&lt;U,
V&gt;::ResultType, OverflowHandler&gt; WTF::operator*(WTF::Checked&lt;U,
OverflowHandler&gt;, V) [with U = unsigned int; V = unsigned int;
OverflowHandler = WTF::CrashOnOverflow; typename WTF::Result&lt;U,
V&gt;::ResultType = unsigned int]'<br />
|   831 | template &lt;typename U, typename V, typename
OverflowHandler&gt; static inline Checked&lt;typename Result&lt;U,
V&gt;::ResultType, OverflowHandler&gt; operator*(Checked&lt;U,
OverflowHandler&gt; lhs, V rhs)<br />
|       |                                                              
                                                                       &#10;          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~<br />
| ninja: build stopped: subcommand failed.<br />
| WARNING: exit code 1 from a shell command.<br />
| ERROR: Execution of
'/home/dsrava434/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/wpe-webkit/2.22.2+gitAUTOINC+22d6522031-r0/temp/run.do_compile.3085636'
failed with exit code 1:</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="13"
data-column-index="3303"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="13"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="14" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="14"
data-column-index="3300">14</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="14"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="14" data-column-index="3302">|
/home/dsrava434/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/westeros/1.0+gitrAUTOINC+bb0164e23f-r0/recipe-sysroot-native/usr/bin/wayland-scanner
code &lt; vpc.xml &gt; vpc-protocol.c<br />
| %3Cstdin%3E:259: element entry: validity error : Element entry content
does not follow the DTD, expecting (description)?, got (CDATA)<br />
| %3Cstdin%3E:263: element entry: validity error : Element entry content
does not follow the DTD, expecting (description)?, got (CDATA)<br />
| %3Cstdin%3E:267: element entry: validity error : Element entry content
does not follow the DTD, expecting (description)?, got (CDATA)<br />
| %3Cstdin%3E:273: element entry: validity error : Element entry content
does not follow the DTD, expecting (description)?, got (CDATA)</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="14"
data-column-index="3303"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="14"
data-column-index="3304"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="15" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="15"
data-column-index="3300">15</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="15"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="15" data-column-index="3302"> |
util-linux/mount.c:253:11: fatal error: rpc/rpc.h: No such file or
directory<br />
|   253 | # include &lt;rpc/rpc.h&gt;<br />
|       |           ^~~~~~~~~~~<br />
| compilation terminERROR: Task
(/home/dsrava434/Sowmya/openembedded-core/meta/recipes-core/busybox/<a
href="http://busybox_1.31.1.bb/" class="external-link"
rel="nofollow">busybox_1.31.1.bb</a>:do_compile) failed with exit code
'1'<br />
ated.</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="15"
data-column-index="3303">Copy file
build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/libwebp/0.5.0-r0/recipe-sysroot-native/usr/include/tirpc/rpc/rpc.h
to the path
build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/busybox/1.31.1-r0/recipe-sysroot/usr/include/rpc</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="15"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="16" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="16"
data-column-index="3300">16</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="16"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="16" data-column-index="3302">|
In file included from util-linux/mount.c:253:<br />
|
/home/dsrava434/Sowmya/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/busybox/1.31.1-r0/recipe-sysroot/usr/include/rpc/rpc.h:38:10:
fatal error: rpc/types.h: No such file or directory<br />
|    38 | #include &lt;rpc/types.h&gt;  /* some typedefs */<br />
|       |          ^~~~~~~~~~~~~<br />
| compilation terminated.</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="16"
data-column-index="3303"><p>Copy file
build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/libwebp/0.5.0-r0/recipe-sysroot-native/usr/include/tirpc/rpc/types.h
to the path
build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/busybox/1.31.1-r0/recipe-sysroot/usr/include/rpc</p>
<p><br />
</p>
<p>similarily add all the header files one by one to the rpc folder when
same error comes up with different file missing. Please find the same
error below but solution is in different directory if working in
laptop.</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="16"
data-column-index="3304"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="17" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="17"
data-column-index="3300">17</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="17"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="17" data-column-index="3302">|
util-linux/mount.c:253:11: fatal error: rpc/rpc.h: No such file or
directory<br />
|   253 | # include &lt;rpc/rpc.h&gt;<br />
|       |           ^~~~~~~~~~~<br />
| compilation terminated.<br />
| scripts/Makefile.build:197: recipe for target 'util-linux/mount.o'
failed</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="17"
data-column-index="3303"><p>copy file rpc.h from
build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/libwebp/0.5.0-r0/recipe-sysroot-native/usr/include/tirpc/rpc/</p>
<p>and paste it in
build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/busybox/1.31.1-r0/recipe-sysroot/usr/include/rpc</p>
<p><br />
</p>
<p>similarily add other header files as well (if prompted).</p>
<p>if asked for netconfig.h file, it can be found in
build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/libwebp/0.5.0-r0/recipe-sysroot-native/usr/include/tirpc/</p>
<p>copy it and paste it in
build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/busybox/1.31.1-r0/recipe-sysroot/usr/include</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="17"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="18" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="18"
data-column-index="3300">18</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="18"
data-column-index="3301">buildx86qemux-dunfell/tmp/work/qemux86mc_dunfell-rdk-linux/devicesettings-hal-noop/1.99+gitrAUTOINC+821b4346bf-r0/git/dsAudio.c</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="18" data-column-index="3302">|
dsAudio.c:36:11: error: conflicting types for
'dsGetAudioCompression'<br />
|    36 | dsError_t dsGetAudioCompression(int handle,
dsAudioCompression_t *compression)<br />
|       |           ^~~~~~~~~~~~~~~~~~~~~<br />
| In file included from dsAudio.c:13:<br />
|
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/qemux86mc_dunfell-rdk-linux/devicesettings-hal-noop/1.99+gitrAUTOINC+821b4346bf-r0/recipe-sysroot/usr/include/rdk/ds-hal/dsAudio.h:134:12:
note: previous declaration of 'dsGetAudioCompression' was here<br />
|   134 | dsError_t  dsGetAudioCompression(int handle, int
*compression);<br />
|       |            ^~~~~~~~~~~~~~~~~~~~~<br />
| dsAudio.c:102:11: error: conflicting types for
'dsSetAudioCompression'<br />
|   102 | dsError_t dsSetAudioCompression(int handle,
dsAudioCompression_t compression)<br />
|       |           ^~~~~~~~~~~~~~~~~~~~~<br />
| In file included from dsAudio.c:13:<br />
|
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/qemux86mc_dunfell-rdk-linux/devicesettings-hal-noop/1.99+gitrAUTOINC+821b4346bf-r0/recipe-sysroot/usr/include/rdk/ds-hal/dsAudio.h:597:12:
note: previous declaration of 'dsSetAudioCompression' was here<br />
|   597 | dsError_t  dsSetAudioCompression(int handle, int
compression);</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="18"
data-column-index="3303"><p>Update the following in the source file
(change data type from compression to int):</p>
<p><br />
</p>
<p>dsError_t dsSetAudioCompression(int handle, int compression)<br />
  {<br />
          dsError_t ret = dsERR_OPERATION_NOT_SUPPORTED;<br />
          /* This is a empty operation in RNG150 */<br />
          return ret;<br />
  }</p>
<p>dsError_t dsGetAudioCompression(int handle, int *compression)<br />
      {<br />
          dsError_t ret = dsERR_NONE;<br />
          return ret;<br />
      }</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="18"
data-column-index="3304"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="19" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="19"
data-column-index="3300">19</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="19"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="19" data-column-index="3302">|
util-linux/mount.c:1061: error: undefined reference to 'xdr_u_int'<br />
| util-linux/mount.c:1056: error: undefined reference to
'xdr_opaque'<br />
| util-linux/mount.c:1093: error: undefined reference to
'xdr_enum'<br />
| util-linux/mount.c:1075: error: undefined reference to
'xdr_bytes'<br />
| util-linux/mount.c:1084: error: undefined reference to 'xdr_int'<br />
| util-linux/mount.c:1084: error: undefined reference to
'xdr_array'<br />
| util-linux/mount.c:1070: error: undefined reference to
'xdr_string'<br />
| util-linux/mount.c:1149: error: undefined reference to
'pmap_getmaps'<br />
| util-linux/mount.c:1659: error: undefined reference to
'clntudp_create'<br />
| util-linux/mount.c:1669: error: undefined reference to
'clnttcp_create'<br />
| util-linux/mount.c:1679: error: undefined reference to
'clnt_spcreateerror'<br />
| util-linux/mount.c:1684: error: undefined reference to
'authunix_create_default'<br />
| util-linux/mount.c:1709: error: undefined reference to
'clnt_sperror'<br />
| util-linux/mount.c:1714: error: undefined reference to
'clnt_sperror'<br />
| util-linux/mount.c:1795: error: undefined reference to
'pmap_getport'<br />
| collect2: error: ld returned 1 exit status<br />
| Note: if build needs additional libraries, put them in
CONFIG_EXTRA_LDLIBS.<br />
| Example: CONFIG_EXTRA_LDLIBS="pthread dl tirpc audit pam"<br />
| Makefile:719: recipe for target 'busybox_unstripped' failed<br />
| make: * [busybox_unstripped] Error 1<br />
| ERROR: oe_runmake failed<br />
| WARNING:
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/busybox/1.31.1-r0/temp/run.do_compile.18458:1
exit 1 from 'exit 1'</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="19"
data-column-index="3303"><p>open this inc file
openembedded-core/meta/recipes-core/busybox/busybox.inc and update</p>
<p>-DEPENDS += "kern-tools-native virtual/crypt"<br />
+DEPENDS += "kern-tools-native virtual/crypt libtirpc"</p>
<p>-export EXTRA_CFLAGS = "${CFLAGS}"<br />
-export EXTRA_LDFLAGS = "${LDFLAGS}"<br />
+export EXTRA_CFLAGS = "${CFLAGS} -I${STAGING_INCDIR}/tirpc"<br />
+export EXTRA_LDFLAGS = "${LDFLAGS} -ltirpc"</p>
<p>open this file
openembedded-core/meta/recipes-core/busybox/busybox/defconfig and
update</p>
<p>-# CONFIG_FEATURE_MOUNT_NFS is not set<br />
+CONFIG_FEATURE_MOUNT_NFS=y</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="19"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="20" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="20"
data-column-index="3300">20</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="20"
data-column-index="3301">dunfell/meta-rdk-bsp-emulator/recipes-support/gdisplay/<a
href="http://gdisplay_1.0.bb/" class="external-link"
rel="nofollow">gdisplay_1.0.bb</a></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="20"
data-column-index="3302">ERROR: gdisplay-1.0-r0 do_package_qa: QA Issue:
/usr/sbin/gdisplay.sh contained in package gdisplay requires /bin/bash,
but no providers found in RDEPENDS_gdisplay? [file-rdeps]<br />
ERROR: gdisplay-1.0-r0 do_package_qa: QA run found fatal errors. Please
consider fixing them.<br />
ERROR: Logfile of failure stored in:
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/gdisplay/1.0-r0/temp/log.do_package_qa.30740<br />
ERROR: Task
(/home/user/dunfell/meta-rdk-bsp-emulator/recipes-support/gdisplay/<a
href="http://gdisplay_1.0.bb/" class="external-link"
rel="nofollow">gdisplay_1.0.bb</a>:do_package_qa) failed with exit code
'1'</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="20"
data-column-index="3303"><p>Add this line in source file</p>
<p>RDEPENDS_${PN} = "bash"</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="20"
data-column-index="3304"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="21" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="21"
data-column-index="3300">21</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="21"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="21"
data-column-index="3302">ERROR: libcobalt-21.lts.stable-7 do_configure:
Execution of
'/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/libcobalt/21.lts.stable-7/temp/run.do_configure.22252'
failed with exit code 2<br />
ERROR: Logfile of failure stored in:
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/libcobalt/21.lts.stable-7/temp/log.do_configure.22252<br />
Log data follows:<br />
| DEBUG: Executing shell function do_configure<br />
| usage: gyp_cobalt [-h] [-C CONFIG] [-D DEBUGMODE] [--check] [-v]<br />
|                   platform [build_file]<br />
| gyp_cobalt: error: too few arguments<br />
| WARNING:
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/libcobalt/21.lts.stable-7/temp/run.do_configure.22252:1
exit 2 from
'/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/libcobalt/21.lts.stable-7/git/src/cobalt/build/gyp_cobalt
-C qa -C gold -C devel'</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="21"
data-column-index="3303"><p>open local.conf and mask these files</p>
<p>BBMASK .= "|meta-rdk-video/recipes-extended/cobalt/<a
href="http://libcobalt_21.lts.stable.bb/" class="external-link"
rel="nofollow">libcobalt_21.lts.stable.bb</a>"<br />
BBMASK .= "|meta-rdk-video/recipes-extended/cobalt/<a
href="http://cobalt-plugin_git.bb/" class="external-link"
rel="nofollow">cobalt-plugin_git.bb</a>"</p>
<p>if it's also throwing error for libcobalt-22, add this mask too</p>
<p>BBMASK .= "|meta-rdk-video/recipes-extended/cobalt/<a
href="http://libcobalt_22.lts.stable.bb/" class="external-link"
rel="nofollow">libcobalt_22.lts.stable.bb</a>"</p>
<p>open
meta-rdk-video/recipes-core/packagegroups/packagegroup-rdk-mediaclient.bbappend
and update (remove cobalt-plugin)</p>
<p>RDEPENDS_packagegroup-rdk-generic-mediaclient_append = "
${@bb.utils.contains('DISTRO_FEATURES', '', '', '', d)}"</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="21"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="22" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="22"
data-column-index="3300">22</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="22"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="22" data-column-index="3302">|
Dependency nettle found: NO found 2.7.1 but need: '&gt;= 3.0'<br />
| Run-time dependency nettle found: NO (tried pkgconfig and cmake)<br />
 ext/hls/meson.build:47:4: ERROR: Problem encountered: HLS plugin
enabled with crypto, but crypto library "nettle" not found<br />
 | A full log can be found at
/home/user/Dunfel/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/gstreamer1.0-plugins-bad/1.16.3-r0/build/meson-logs/meson-log.txt<br />
 <br />
 ./tmp/work/core2-32-rdk-linux/gstreamer1.0-plugins-bad/1.14.1-r0/gst-plugins-bad-1.14.1/ext/hls/meson.build</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="22"
data-column-index="3303"><p>open meta-rdk/conf/distro/rdk.conf and
change 3.3.% to 3.5.%</p>
<p>PREFERRED_VERSION_gnutls_dunfell ?= "3.5.%"</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="22"
data-column-index="3304"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="23" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="23"
data-column-index="3300">23</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="23"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="23" data-column-index="3302">Any
do_fetch: Fetcher failure errors</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="23"
data-column-index="3303"><p>Go to dunfell/</p>
<p>Run these commands in order</p>
<p><span style="color: rgb(23,43,77);">repo init
-u<span> </span></span><a href="https://code.rdkcentral.com/r/manifests"
class="external-link" style="text-align: left;"
rel="nofollow">https://code.rdkcentral.com/r/manifests</a><span
style="color: rgb(23,43,77);"><span> </span>-b dunfell -m
rdkv-nosrc.xml </span></p>
<p><span style="color: rgb(23,43,77);">MACHINE=qemux86mc-dunfell source
meta-cmf-bsp-emulator/setup-environment  </span></p>
<p><span style="color: rgb(23,43,77);">bitbake
rdk-generic-mediaclient-wpe-image</span></p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="23"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="24" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="24"
data-column-index="3300">24</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="24"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="24" data-column-index="3302">|
meson.build:18:0: ERROR: Subproject directory not found and FFmpeg.wrap
file not found<br />
| <br />
| A full log can be found at
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/gstreamer1.0-libav/1.16.3-r0/build/meson-logs/meson-log.txt<br />
| ERROR: meson failed<br />
| WARNING:
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/gstreamer1.0-libav/1.16.3-r0/temp/run.do_configure.22683:1
exit 1 from 'exit 1'</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="24"
data-column-index="3303"><p>open meta-rdk/conf/distro/rdk.conf and add
these lines:</p>
<p>PREFERRED_PROVIDER_ffmpeg = "ffmpeg"  ==========&gt; added this
line</p>
<p>LICENSE_FLAGS_WHITELIST += "commercial_gst-fluendo-mpegdemux \<br />
                            commercial_gst_ffmpeg \<br />
                            commercial_ffmpeg \   ======&gt; added this
line<br />
                            commercial_libav \</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="24"
data-column-index="3304"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="25" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="25"
data-column-index="3300">25</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="25"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="25" data-column-index="3302">|
In file included from ../git/rmfApp/pipeline.cpp:55:<br />
| ../git/rmfApp/closedcaption.h:22:10: fatal error: vlCCConstants.h: No
such file or directory<br />
|    22 | #include "vlCCConstants.h"<br />
|       |          ^~~~~~~~~~~~~~~~~<br />
| In file included from ../git/rmfApp/rmfApp.cpp:54:<br />
| ../git/rmfApp/closedcaption.h:22:10: fatal error: vlCCConstants.h: No
such file or directory<br />
|    22 | #include "vlCCConstants.h"<br />
|       |          ^~~~~~~~~~~~~~~~~<br />
| compilation terminated.<br />
| compilation terminated.<br />
| Makefile:589: recipe for target 'pipeline.o' failed<br />
| make[1]: *** [pipeline.o] Error 1<br />
| make[1]: *** Waiting for unfinished jobs....<br />
| Makefile:589: recipe for target 'rmfApp.o' failed<br />
| make[1]: *** [rmfApp.o] Error 1<br />
| ../git/rmfApp/closedcaption.cpp:22:10: fatal error: ccDataReader.h: No
such file or directory<br />
|    22 | #include "ccDataReader.h"<br />
|       |          ^~~~~~~~~~~~~~~~<br />
| compilation terminated.<br />
| Makefile:589: recipe for target 'closedcaption.o' failed<br />
| make[1]: *** [closedcaption.o] Error 1<br />
| make[1]: Leaving directory
'/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/rmfapp/1.99+gitAUTOINC+4bf7155ef7-r0/build'<br />
| Makefile:621: recipe for target 'all-recursive' failed<br />
| make: *** [all-recursive] Error 1<br />
| ERROR: oe_runmake failed<br />
| WARNING:
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/rmfapp/1.99+gitAUTOINC+4bf7155ef7-r0/temp/run.do_compile.25326:1
exit 1 from 'exit 1'</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="25"
data-column-index="3303"><p>open
meta-rdk-bsp-emulator/recipes-extended/mediaframework/rmfapp_git.bbappend
and comment this line:</p>
<p>EXTRA_OECONF += " --enable-ccaption"</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="25"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="26" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="26"
data-column-index="3300">26</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="26"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="26" data-column-index="3302">|
../../neon-0.30.2/src/ne_privssl.h:91:30: error: unknown type name
'gnutls_privkey_sign_func'; did you mean 'gnutls_sign_func'?<br />
  |    91 |                              gnutls_privkey_sign_func
sign_func, void *userdata);<br />
  |       |                              ^~~~~~~~~~~~~~~~~~~~~~~~<br />
  |       |                              gnutls_sign_func<br />
  | In file included from ../../neon-0.30.2/src/ne_gnutls.c:61:<br />
  | ../../neon-0.30.2/src/ne_privssl.h:91:30: error: unknown type name
'gnutls_privkey_sign_func'; did you mean 'gnutls_sign_func'?<br />
  |    91 |                              gnutls_privkey_sign_func
sign_func, void *userdata);<br />
  |       |                              ^~~~~~~~~~~~~~~~~~~~~~~~<br />
  |       |                              gnutls_sign_func<br />
  | ../../neon-0.30.2/src/ne_gnutls.c: In function
'ne_ssl_context_create':<br />
  | ../../neon-0.30.2/src/ne_gnutls.c:706:9: warning:
'gnutls_certificate_client_set_retrieve_function' is deprecated
[-Wdeprecated-declarations]<br />
  |   706 |        
gnutls_certificate_client_set_retrieve_function(ctx-&gt;cred,<br />
  |       |        
^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<br />
  | In file included from
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/neon/0.30.2-r0/recipe-sysroot/usr/include/gnutls/gnutls.h:1775,<br />
  |                  from ../../neon-0.30.2/src/ne_gnutls.c:35:<br />
  |
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/neon/0.30.2-r0/recipe-sysroot/usr/include/gnutls/compat.h:158:6:
note: declared here<br />
  |   158 | void gnutls_certificate_client_set_retrieve_function<br />
  |       |      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<br />
  | ../../neon-0.30.2/src/ne_gnutls.c:707:57: warning: passing argument
2 of 'gnutls_certificate_client_set_retrieve_function' from incompatible
pointer type [-Wincompatible-pointer-types]<br />
  |   707 |                                                        
provide_client_cert);<br />
  |       |                                                        
^~~~~~~~~~~~~~~~~~~<br />
  |       |                                                        
|<br />
  |       |                                                         int
(*)(struct gnutls_session_int *, const gnutls_datum_t *, int,  const
gnutls_pk_algorithm_t *, int,  gnutls_retr2_st *) {aka int (*)(struct
gnutls_session_int *, const struct &lt;anonymous&gt; *, int,  const enum
&lt;anonymous&gt; *, int,  struct gnutls_retr2_st *)}<br />
  | In file included from
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/neon/0.30.2-r0/recipe-sysroot/usr/include/gnutls/gnutls.h:1775,<br />
  |                  from ../../neon-0.30.2/src/ne_gnutls.c:35:<br />
  |
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/neon/0.30.2-r0/recipe-sysroot/usr/include/gnutls/compat.h:161:4:
note: expected 'int (*)(struct gnutls_session_int *, const
gnutls_datum_t *, int,  const gnutls_pk_algorithm_t *, int,
 gnutls_retr_st *)' {aka 'int (*)(struct gnutls_session_int *, const
struct &lt;anonymous&gt; *, int,  const enum &lt;anonymous&gt; *, int,
 struct gnutls_retr_st *)'} but argument is of type 'int (*)(struct
gnutls_session_int *, const gnutls_datum_t *, int,  const
gnutls_pk_algorithm_t *, int,  gnutls_retr2_st *)' {aka 'int (*)(struct
gnutls_session_int *, const struct &lt;anonymous&gt; *, int,  const enum
&lt;anonymous&gt; *, int,  struct gnutls_retr2_st *)'}<br />
  |   160 |    gnutls_certificate_client_retrieve_function *<br />
  |       |    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<br />
  |   161 |    func) _GNUTLS_GCC_ATTR_DEPRECATED;<br />
  |       |    ^~~~<br />
  | ../../neon-0.30.2/src/ne_socket.c: In function 'writev_raw':<br />
  | ../../neon-0.30.2/src/ne_socket.c:580:8: warning: implicit
declaration of function 'writev'; did you mean 'write'?
[-Wimplicit-function-declaration]<br />
  |   580 |  ret = writev(sock-&gt;fd, vec, count);<br />
  |       |        ^~~~~~<br />
  |       |        write<br />
  | Makefile:69: recipe for target 'ne_gnutls.lo' failed<br />
  | make[1]: *** [ne_gnutls.lo] Error 1<br />
  | make[1]: *** Waiting for unfinished jobs....<br />
  | Makefile:69: recipe for target 'ne_socket.lo' failed<br />
  | make[1]: *** [ne_socket.lo] Error 1<br />
  | make[1]: Leaving directory
'/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/neon/0.30.2-r0/build/src'<br />
  | Makefile:88: recipe for target 'subdirs' failed<br />
  | make: *** [subdirs] Error 2<br />
  | ERROR: oe_runmake failed</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="26"
data-column-index="3303">change gnutls_privkey_sign_func to
gnutls_sign_func in
build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/neon/0.30.2-r0/neon-0.30.2/src/ne_privssl.h<br />
ne__ssl_clicert_exkey_import(const unsigned char *der, size_t
der_len,<br />
                             gnutls_privkey_sign_func sign_func, void
*userdata)<br />
ne__ssl_clicert_exkey_import(const unsigned char *der, size_t
der_len,<br />
                                                         &#10;gnutls_sign_func sign_func, void *userdata)</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="26"
data-column-index="3304"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="27" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="27"
data-column-index="3300">27</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="27"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="27" data-column-index="3302">|
mfrMgr.c:248: error: undefined reference to 'WIFI_SetCredentials'<br />
| mfrMgr.c:259: error: undefined reference to
'WIFI_GetCredentials'<br />
| collect2: error: ld returned 1 exit status<br />
| Makefile:107: recipe for target 'executable' failed<br />
| make: * [executable] Error 1<br />
| make: Leaving directory
'/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/iarmmgrs/1.99-r0/git/mfr'<br />
| ERROR: oe_runmake failed<br />
| WARNING:
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/iarmmgrs/1.99-r0/temp/run.do_compile.20084:1
exit 1 from 'exit 1'</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="27"
data-column-index="3303"><p>open
meta-rdk-video/recipes-extended/iarmmgrs/<a
href="http://iarmmgrs_git.bb/" class="external-link"
rel="nofollow">iarmmgrs_git.bb</a> and comment:</p>
<p>CFLAGS_append = " ${@bb.utils.contains('DISTRO_FEATURES', 'wifi',
'-DENABLE_MFR_WIFI', '', d)}"</p>
<p><br />
</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="27"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="28" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="28"
data-column-index="3300">28</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="28"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="28"
data-column-index="3302"><p>images/<a
href="http://rdk-generic-mediaclient-wpe-image.bb/"
class="external-link"
rel="nofollow">rdk-generic-mediaclient-wpe-image.bb</a>:do_rootfs)
failed with exit code '1'</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="28"
data-column-index="3303"><p>removed
gstreamer1.0-plugins-bad-ceaccoverlay from RDEPENDS in
./meta-rdk-bsp-emulator/recipes-core/packagegroups/<a
href="http://packagegroup-gstreamer-plugins.bb/" class="external-link"
rel="nofollow">packagegroup-gstreamer-plugins.bb</a> file</p>
<p><br />
</p>
<p>removed gstreamer1.0-plugins-bad-dataurisrc from RDEPS_EXTRA in
./meta-rdk-ext/recipes-extended/wpe-webkit/wpe-webkit.inc</p>
<p><br />
</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="28"
data-column-index="3304"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="29" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="29"
data-column-index="3300">29</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="29"
data-column-index="3301"><br />
</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="29"
data-column-index="3302"><ol>
<li>ERROR: rdk-generic-mediaclient-wpe-image-1.0-r0 do_rootfs:
Postinstall scriptlets of ['busybox'] have failed. If the intention is
to defer them to first boot,<br />
then please place them into pkg_postinst_ontarget_${PN} ().<br />
Deferring to first boot via 'exit 1' is no longer supported.<br />
Details of the failure are in
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/qemux86mc_dunfell-rdk-linux/rdk-generic-mediaclient-wpe-image/1.0-r0/temp/log.do_rootfs.<br />
ERROR: Logfile of failure stored in:
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/qemux86mc_dunfell-rdk-linux/rdk-generic-mediaclient-wpe-image/1.0-r0/temp/log.do_rootfs.19852<br />
ERROR: Task (/home/user/dunfell/meta-rdk/recipes-core/images/<a
href="http://rdk-generic-mediaclient-wpe-image.bb/"
class="external-link"
rel="nofollow">rdk-generic-mediaclient-wpe-image.bb</a>:do_rootfs)
failed with exit code '1'</li>
<li>ERROR: rdk-generic-mediaclient-wpe-image-1.0-r0 do_rootfs: The
postinstall intercept hook 'update_gio_module_cache' failed, details in
/home/svenko766/dunfell/build-qemux86mc-dunfell/tmp/work/qemux86mc_dunfell-rdk-linux/rdk-generic-mediaclient-wpe-image/1.0-r0/temp/log.do_rootfs<br />
ERROR: Logfile of failure stored in:
/home/svenko766/dunfell/build-qemux86mc-dunfell/tmp/work/qemux86mc_dunfell-rdk-linux/rdk-generic-mediaclient-wpe-image/1.0-r0/temp/log.do_rootfs.2126752<br />
ERROR: Task (/home/svenko766/dunfell/meta-rdk/recipes-core/images/<a
href="http://rdk-generic-mediaclient-wpe-image.bb/"
class="external-link"
rel="nofollow">rdk-generic-mediaclient-wpe-image.bb</a>:do_rootfs)
failed with exit code '1'</li>
</ol>
<p><br />
</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="29"
data-column-index="3303"><span style="color: rgb(36,36,36);">build was
using the older version of procps 3.3.12, changed it to newer version
3.3.16 in rdk.conf file</span></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="29"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="30" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="30"
data-column-index="3300">30</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="30"
data-column-index="3301">meta-rdk-bsp-emulator/recipes-core/packagegroups/packagegroup-rdk-gstreamer1.bbappend</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="30"
data-column-index="3302"><p>Collected errors:</p>
<p> * Solver encountered 1 problem(s):</p>
<p> * Problem 1/1:</p>
<p> *   - nothing provides gstreamer1.0-plugins-bad-hls needed by
packagegroup-rdk-gstreamer1-1.0-r0.all</p>
<p> *  * Solution 1:</p>
<p> *   - do not ask to install a package providing
packagegroup-gstreamer-plugins</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="30"
data-column-index="3303"><p>Remove gstreamer1.0-plugins-bad-hls from
RDEPENDS_packagegroup-rdk-gstreamer1_append</p>
<p>RDEPENDS_packagegroup-rdk-gstreamer1_append = "\<br />
                                gstreamer1.0-plugins-bad-dashdemux
\<br />
                                gstreamer1.0-plugins-bad-hls \</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="30"
data-column-index="3304"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="31" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="31"
data-column-index="3300">31</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="31"
data-column-index="3301">meta-rdk-bsp-emulator/recipes-core/packagegroups/packagegroup-rdk-gstreamer1.bbappend</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="31"
data-column-index="3302"><p>Collected errors:<br />
 * Solver encountered 1 problem(s):<br />
 * Problem 1/1:<br />
 *   - nothing provides gstreamer1.0-plugins-bad-curl needed by
packagegroup-rdk-gstreamer1-1.0-r0.all<br />
 * <br />
 * Solution 1:<br />
 *   - do not ask to install a package providing
packagegroup-gstreamer-plugins</p>
<p>ERROR: Logfile of failure stored in:
/home/svenko766/dunfell/build-qemux86mc-dunfell/tmp/work/qemux86mc_dunfell-rdk-linux/rdk-generic-mediaclient-wpe-image/1.0-r0/temp/log.do_rootfs.2125881<br />
ERROR: Task (/home/svenko766/dunfell/meta-rdk/recipes-core/images/<a
href="http://rdk-generic-mediaclient-wpe-image.bb/"
class="external-link"
rel="nofollow">rdk-generic-mediaclient-wpe-image.bb</a>:do_rootfs)
failed with exit code '1'</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="31"
data-column-index="3303"><p>Remove gstreamer1.0-plugins-bad-curl from
RDEPENDS_packagegroup-rdk-gstreamer1_append</p>
<p>RDEPENDS_packagegroup-rdk-gstreamer1_append = "\<br />
                                gstreamer1.0-plugins-bad-dashdemux
\<br />
                                gstreamer1.0-plugins-bad-hls \<br />
                 gstreamer1.0-plugins-bad-curl \<br />
                 </p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="31"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="32" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="32"
data-column-index="3300">32</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="32"
data-column-index="3301">meta-rdk-bsp-emulator/recipes-core/packagegroups/packagegroup-rdk-gstreamer1.bbappend</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="32"
data-column-index="3302"><p> * Solver encountered 1 problem(s):<br />
 * Problem 1/1:<br />
 *   - nothing provides gstreamer1.0-plugins-bad-bz2 needed by
packagegroup-rdk-gstreamer1-1.0-r0.all<br />
 * <br />
 * Solution 1:<br />
 *   - do not ask to install a package providing
packagegroup-gstreamer-plugins</p>
<p>ERROR: Logfile of failure stored in:
/home/svenko766/dunfell/build-qemux86mc-dunfell/tmp/work/qemux86mc_dunfell-rdk-linux/rdk-generic-mediaclient-wpe-image/1.0-r0/temp/log.do_rootfs.2122579<br />
ERROR: Task (/home/svenko766/dunfell/meta-rdk/recipes-core/images/<a
href="http://rdk-generic-mediaclient-wpe-image.bb/"
class="external-link"
rel="nofollow">rdk-generic-mediaclient-wpe-image.bb</a>:do_rootfs)
failed with exit code '1'</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="32"
data-column-index="3303"><p>Remove gstreamer1.0-plugins-bad-bz2 from
RDEPENDS_packagegroup-rdk-gstreamer1_append</p>
<p>RDEPENDS_packagegroup-rdk-gstreamer1_append = "\<br />
                                gstreamer1.0-plugins-bad-dashdemux
\<br />
                                gstreamer1.0-plugins-bad-hls \<br />
                 gstreamer1.0-plugins-bad-bz2 \</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="32"
data-column-index="3304"><br />
</td>
</tr>
<tr class="odd" data-ite-row-number="33" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="33"
data-column-index="3300">33</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="33"
data-column-index="3301">core2-32-rdk-linux/glib-networking/2.48.2-r0/recipe-sysroot/usr/include/gnutls/gnutls.h</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="33"
data-column-index="3302">configure: error: in
`/home/svenko766/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/glib-networking/2.48.2-r0/build':<br />
| configure: error: "Requested 'gnutls &gt;= 3.0' but version of GnuTLS
is 2.12.23<br />
| You may find new versions of GnuTLS at <a
href="http://www.gnu.org/software/gnutls/" class="external-link"
rel="nofollow">http://www.gnu.org/software/gnutls/</a>"<br />
| See `config.log' for more details<br />
| NOTE: The following config.log files may provide further
information.<br />
| NOTE:
/home/svenko766/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/glib-networking/2.48.2-r0/build/config.log<br />
| ERROR: configure failed<br />
| WARNING: exit code 1 from a shell command.<br />
| ERROR: Execution of
'/home/svenko766/dunfell/build-qemux86mc-dunfell/tmp/work/core2-32-rdk-linux/glib-networking/2.48.2-r0/temp/run.do_configure.2045166'
failed with exit code 1<br />
ERROR: Task <br />
ERROR: Task
(/home/svenko766/dunfell/meta-rdk-ext/recipes-core/glib-networking/<a
href="http://glib-networking_2.48.2.bb/" class="external-link"
rel="nofollow">glib-networking_2.48.2.bb</a>:do_configure) failed with
exit code '1'</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="33"
data-column-index="3303"><p>Update ther version numbers as below -<br />
#define GNUTLS_VERSION "3.4.7"</p>
<p>#define GNUTLS_VERSION_MAJOR 3<br />
#define GNUTLS_VERSION_MINOR 4<br />
#define GNUTLS_VERSION_PATCH 7</p></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="33"
data-column-index="3304"><br />
</td>
</tr>
<tr class="even" data-ite-row-number="34" role="row">
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="0" data-row-index="34"
data-column-index="3300">34</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="1" data-row-index="34"
data-column-index="3301">gstreamer1.0-plugins-bad-hls</td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="2" data-row-index="34"
data-column-index="3302"><span style="color: rgb(36,36,36);">ERROR:
qtbase-native-5.1.1-r0 do_configure: Configuring qt failed. EXTRA_OECONF
was -dont-process -prefix
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/x86_64-linux/qtbase-native/5.1.1-r0/recipe-sysroot-native/usr
-sysroot
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/x86_64-linux/qtbase-native/5.1.1-r0/recipe-sysroot-native
-no-gcc-sysroot -system-zlib -no-libjpeg -no-libpng -no-gif
-no-accessibility -no-cups -no-nis -no-gui -no-qml-debug -no-sql-mysql
-no-sql-sqlite -no-opengl -no-openssl -no-xcb -no-icu -verbose -release
-prefix
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/x86_64-linux/qtbase-native/5.1.1-r0/recipe-sysroot-native/usr
-bindir
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/x86_64-linux/qtbase-native/5.1.1-r0/recipe-sysroot-native/usr/bin/qt5
-libdir
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/x86_64-linux/qtbase-native/5.1.1-r0/recipe-sysroot-native/usr/lib
-headerdir
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/x86_64-linux/qtbase-native/5.1.1-r0/recipe-sysroot-native/usr/include/qt5
-archdatadir
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/x86_64-linux/qtbase-native/5.1.1-r0/recipe-sysroot-native/usr/lib/qt5
-datadir
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/x86_64-linux/qtbase-native/5.1.1-r0/recipe-sysroot-native/usr/share/qt5
-docdir
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/x86_64-linux/qtbase-native/5.1.1-r0/recipe-sysroot-native/usr/share/doc/qt5
-sysconfdir
/home/user/dunfell/build-qemux86mc-dunfell/tmp/work/x86_64-linux/qtbase-native/5.1.1-r0/recipe-sysroot-native/etc/qt5
-no-glib -no-iconv -silent -nomake examples -nomake tests -no-rpath
-platform linux-oe-g++</span></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="3" data-row-index="34"
data-column-index="3303"><span style="color: rgb(36,36,36);">Changed gcc
&amp; g++ version to 7.5.0 on Host device</span></td>
<td class="confluenceTd custom-row" style="text-align: left;"
data-ite-col-number="4" data-row-index="34"
data-column-index="3304"><br />
</td>
</tr>
</tbody>
</table>

  

  

  

  

  

  

<span class="aui-icon aui-icon-small aui-iconfont-add"></span>

<span class="aui-dropdown2-heading" aria-hidden="true"></span>

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
role="menuitem" tabindex="-1"><span
class="aui-icon aui-icon-small table-filter-inserter"></span>Filter
table data<span class="aui-icon aui-icon-wait"></span></a><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
role="menuitem" tabindex="-1"><span
class="aui-icon aui-icon-small pivot-table-inserter"></span>Create a
pivot table<span class="aui-icon aui-icon-wait"></span></a><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
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

<a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK"
class="like-button"><span
class="aui-icon aui-icon-small aui-iconfont-like"></span><span
class="like-button-text">Like</span></a><span class="like-summary like-summary-margin-left">Be
the first to like this</span>

-   No labels
-   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    class="show-labels-editor" title="Edit Labels (Type &#39;l&#39;)"><span
    class="aui-icon aui-icon-small aui-iconfont-devtools-tag-small">Edit
    Labels</span></a>

<a
href="https://wiki.rdkcentral.com/users/profile/editmyprofilepicture.action"
class="userLogoLink userlink-1" data-username="narayanaswamy"
data-user-hover-bound="true"><img
src="./Tryout_video_files/add_profile_pic.svg"
class="userLogo logo defaultLogo"
alt="User icon: Add a picture of yourself" /></a>

Write a comment...

<span class="toolbar-item"><a
href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK?showComments=true&amp;showCommentArea=true#addcomment"
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
style="display:none;">{"serverDuration": 786, "requestCorrelationId":
"df28fba19996228b"}</span>

1.  <a href="https://wiki.rdkcentral.com/display/DOC"
    target="_blank">DOCUMENTATION</a>
2.  <a href="https://wiki.rdkcentral.com/collector/pages.action?key=DOC"
    target="_blank">Pages</a>
3.  <span id="ellipsis">**…**</span>
4.  <a href="https://wiki.rdkcentral.com/display/DOC/RDK+Documentation+Home"
    target="_blank">RDK Documentation Home</a>
5.  <a href="https://wiki.rdkcentral.com/display/DOC/Documentation"
    target="_blank">Documentation</a>
6.  <a
    href="https://wiki.rdkcentral.com/display/DOC/RDK+Video+Documentation"
    target="_blank">RDK Video Documentation</a>
7.  <span class="edited-page-title"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK"
    target="_blank">Try Out RDK</a></span>

search

recentlyviewed

attachments

weblink

advanced

image-effects

image-attributes

-   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    id="format-dropdown-display"
    class="toolbar-trigger aui-dd-trigger aui-button"
    data-control-id="formatselect" data-resolved=""><span
    class="dropdown-text">Paragraph</span> <span
    class="icon aui-icon aui-icon-small aui-iconfont-dropdown"></span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link">Paragraph</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link">Heading 1</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link">Heading 2</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link">Heading 3</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link">Heading 4</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link">Heading 5</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link">Heading 6</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link">Preformatted</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link">Quote</a>

<!-- -->

-   <span id="rte-button-bold"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    class="toolbar-trigger" data-control-id="bold"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-bold">Bold</span></a></span>

-   <span id="rte-button-italic"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    class="toolbar-trigger" data-control-id="italic"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-italic">Italic</span></a></span>

-   <span id="rte-button-underline"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    class="toolbar-trigger" data-control-id="underline"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-underline">Underline</span></a></span>

-   <span id="color-picker-control"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    id="rte-button-color" class="toolbar-trigger aui-button"
    data-color="003366" data-tooltip="Color" data-resolved=""><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-color">Color
    picker</span><span class="selected-color"></span></a></span>
    <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    id="rte-button-color-selector"
    class="toolbar-trigger aui-dd-trigger aui-button"
    data-control-id="colorSelector" data-tooltip="More colors"
    data-resolved=""><span
    class="icon aui-icon aui-icon-small aui-iconfont-dropdown">More
    colors</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Black" data-tooltip="Black"
        style="background-color: #000000" data-color="000000"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Burnt orange" data-tooltip="Burnt orange"
        style="background-color: #993300" data-color="993300"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Dark olive" data-tooltip="Dark olive"
        style="background-color: #333300" data-color="333300"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Dark green" data-tooltip="Dark green"
        style="background-color: #003300" data-color="003300"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Dark azure" data-tooltip="Dark azure"
        style="background-color: #003366" data-color="003366"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Navy blue" data-tooltip="Navy blue"
        style="background-color: #000080" data-color="000080"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Indigo" data-tooltip="Indigo"
        style="background-color: #333399" data-color="333399"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Very dark grey" data-tooltip="Very dark grey"
        style="background-color: #333333" data-color="333333"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Maroon" data-tooltip="Maroon"
        style="background-color: #800000" data-color="800000"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Orange" data-tooltip="Orange"
        style="background-color: #FF6600" data-color="FF6600"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Olive" data-tooltip="Olive"
        style="background-color: #808000" data-color="808000"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Green" data-tooltip="Green"
        style="background-color: #008000" data-color="008000"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Teal" data-tooltip="Teal" style="background-color: #008080"
        data-color="008080"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Blue" data-tooltip="Blue" style="background-color: #0000FF"
        data-color="0000FF"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Greyish blue" data-tooltip="Greyish blue"
        style="background-color: #666699" data-color="666699"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Grey" data-tooltip="Grey" style="background-color: #7A869A"
        data-color="7A869A"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Red" data-tooltip="Red" style="background-color: #FF0000"
        data-color="FF0000"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Amber" data-tooltip="Amber"
        style="background-color: #FF9900" data-color="FF9900"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Yellow green" data-tooltip="Yellow green"
        style="background-color: #99CC00" data-color="99CC00"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Sea green" data-tooltip="Sea green"
        style="background-color: #339966" data-color="339966"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Turquoise" data-tooltip="Turquoise"
        style="background-color: #33CCCC" data-color="33CCCC"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Royal blue" data-tooltip="Royal blue"
        style="background-color: #3366FF" data-color="3366FF"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Purple" data-tooltip="Purple"
        style="background-color: #800080" data-color="800080"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Medium grey" data-tooltip="Medium grey"
        style="background-color: #A5ADBA" data-color="A5ADBA"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Magenta" data-tooltip="Magenta"
        style="background-color: #FF00FF" data-color="FF00FF"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Gold" data-tooltip="Gold" style="background-color: #FFCC00"
        data-color="FFCC00"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Yellow" data-tooltip="Yellow"
        style="background-color: #FFFF00" data-color="FFFF00"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Lime" data-tooltip="Lime" style="background-color: #00FF00"
        data-color="00FF00"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Aqua" data-tooltip="Aqua" style="background-color: #00FFFF"
        data-color="00FFFF"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Sky blue" data-tooltip="Sky blue"
        style="background-color: #00CCFF" data-color="00CCFF"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Red violet" data-tooltip="Red violet"
        style="background-color: #993366" data-color="993366"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Light grey" data-tooltip="Light grey"
        style="background-color: #C1C7D0" data-color="C1C7D0"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Pink" data-tooltip="Pink" style="background-color: #FF99CC"
        data-color="FF99CC"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Peach" data-tooltip="Peach"
        style="background-color: #FFCC99" data-color="FFCC99"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Light yellow" data-tooltip="Light yellow"
        style="background-color: #FFFF99" data-color="FFFF99"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Pale green" data-tooltip="Pale green"
        style="background-color: #CCFFCC" data-color="CCFFCC"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Pale cyan" data-tooltip="Pale cyan"
        style="background-color: #CCFFFF" data-color="CCFFFF"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Light sky blue" data-tooltip="Light sky blue"
        style="background-color: #99CCFF" data-color="99CCFF"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="Plum" data-tooltip="Plum" style="background-color: #CC99FF"
        data-color="CC99FF"> </a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        aria-label="White" data-tooltip="White"
        style="background-color: #FFFFFF" data-color="FFFFFF"> </a>

-   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    id="rte-button-more" class="toolbar-trigger aui-dd-trigger aui-button"
    data-tooltip="More" data-resolved=""><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-styles">Formatting</span>
    <span
    class="icon aui-icon aui-icon-small aui-iconfont-dropdown"></span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="rte-strikethrough" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        Strikethrough</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="rte-sub" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        Subscript</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="rte-sup" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        Superscript</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="rte-monospace" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        Monospace</a>

    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="rte-removeformat" class="item-link">Clear formatting</a>

<!-- -->

-   <span id="rte-button-bullist"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    class="toolbar-trigger" data-control-id="bullist"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-list-bullet">Bullet
    list</span></a></span>
-   <span id="rte-button-numlist"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    class="toolbar-trigger" data-control-id="numlist"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-list-number">Numbered
    list</span></a></span>

<!-- -->

-   <span id="rte-button-tasklist"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    class="toolbar-trigger" data-control-id="tasklist"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-task">Task
    list</span></a></span>

<!-- -->

-   <span id="rte-button-outdent"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    class="toolbar-trigger" data-control-id="outdent"><span
    class="icon aui-icon aui-icon-small aui-iconfont-indent-left">Outdent</span></a></span>
-   <span id="rte-button-indent"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    class="toolbar-trigger" data-control-id="indent"><span
    class="icon aui-icon aui-icon-small aui-iconfont-indent-right">Indent</span></a></span>

<!-- -->

-   <span id="rte-button-justifyleft"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    class="toolbar-trigger" data-control-id="justifyleft"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-align-left">Align
    left</span></a></span>
-   <span id="rte-button-justifycenter"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    class="toolbar-trigger" data-control-id="justifycenter"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-align-center">Align
    center</span></a></span>
-   <span id="rte-button-justifyright"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    class="toolbar-trigger" data-control-id="justifyright"><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-align-right">Align
    right</span></a></span>

<!-- -->

-   <span id="page-layout-2"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    id="rte-button-pagelayout-2"
    class="aui-button aui-button-subtle toolbar-trigger"
    data-resolved=""><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-layout">Page
    layout</span></a></span>

<!-- -->

<!-- -->

-   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    id="rte-button-link"
    class="toolbar-trigger aui-button aui-button-subtle"
    data-control-id="linkbrowserButton" aria-label="Insert link"
    data-resolved=""><span
    class="icon aui-icon aui-icon-small aui-iconfont-link"></span> <span
    class="trigger-text">Link</span></a>

<!-- -->

-   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    id="rte-button-insert-table"
    class="toolbar-trigger aui-dd-trigger aui-button aui-button-subtle"
    data-tooltip="Insert table" aria-label="Insert table"
    data-resolved=""><span
    class="icon aui-icon aui-icon-small aui-iconfont-editor-table"></span>
    <span class="dropdown-text">Table</span> <span
    class="icon aui-icon aui-icon-small aui-iconfont-dropdown"></span></a>

<!-- -->

-   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    id="rte-button-insert"
    class="toolbar-trigger aui-dd-trigger aui-button aui-button-subtle"
    data-tooltip="Insert more content" aria-label="Insert more content"
    data-resolved=""><span
    class="icon aui-icon aui-icon-small aui-iconfont-add"></span> <span
    class="dropdown-text">Insert</span> <span
    class="icon aui-icon aui-icon-small aui-iconfont-dropdown"></span></a>
    <span class="assistive">Insert content</span>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="rte-insert-image" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-image"></span> Files
        and images</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="rte-insert-link" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-link"></span> Link</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="rte-insert-wikimarkup" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-code"></span>
        Markup</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="rte-insert-hr" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-horizontal-rule"></span>
        Horizontal rule</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="rte-insert-tasklist" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-task"></span> Task
        list</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="rte-insert-date" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-calendar"></span>
        Date</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="rte-insert-emoticon" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-emoji"></span>
        Emoticon</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="rte-insert-symbol" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-symbol"></span>
        Symbol</a>

    <span class="assistive">Insert macro</span>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="insertmention-button" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-mention"></span> User
        mention</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="jiralink" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-jira"></span> Jira
        Issue/Filter</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#" id="info"
        class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-info-filled"></span>
        Info</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="drawio" class="item-link"><span class="icon"></span> draw.io
        Diagram</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="inc-drawio" class="item-link"><span class="icon"></span> Embed
        draw.io Diagram</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="drawio-sketch" class="item-link"><span class="icon"></span> draw.io
        Board Diagram</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="gliffy" class="item-link"><span class="icon"></span> Gliffy
        Diagram</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="status" class="item-link"><span
        class="icon confluence-icon-status-macro"></span> Status</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="gallery" class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-gallery"></span>
        Gallery</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#" id="toc"
        class="item-link"><span
        class="icon aui-icon aui-icon-small aui-iconfont-overview"></span> Table
        of Contents</a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="rest-forum" class="item-link"><span class="icon"></span> Forum</a>

    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        id="rte-insert-macro" class="item-link">Other macros</a>

<!-- -->

-   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    id="rte-button-pagelayout"
    class="toolbar-trigger aui-dd-trigger aui-button aui-button-subtle"
    data-tooltip="Page layout" data-resolved=""><span
    class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-default">Page
    layout</span> <span
    class="icon aui-icon aui-icon-small aui-iconfont-dropdown"></span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-none&quot;, &quot;columns&quot;: 0   }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-none">No
        layout</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-two-simple&quot;, &quot;columns&quot;: [&quot;&quot;, &quot;&quot;]   }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-two-simple">Two
        column (simple)</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-two-simple-left&quot;, &quot;columns&quot;: [&quot;aside&quot;, &quot;large&quot;]   }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-two-simple-left">Two
        column (simple, left sidebar)</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-two-simple-right&quot;, &quot;columns&quot;: [&quot;large&quot;, &quot;aside&quot;]   }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-two-simple-right">Two
        column (simple, right sidebar)</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-three-simple&quot;, &quot;columns&quot;: [&quot;&quot;, &quot;&quot;, &quot;&quot;]   }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-three-simple">Three
        column (simple)</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-two&quot;, &quot;columns&quot;: [&quot;&quot;, &quot;&quot;] , &quot;header&quot;: true  , &quot;footer&quot;:true  }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-two">Two
        column</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-two-left&quot;, &quot;columns&quot;: [&quot;aside&quot;, &quot;large&quot;] , &quot;header&quot;: true  , &quot;footer&quot;:true  }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-two-left">Two
        column (left sidebar)</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-two-right&quot;, &quot;columns&quot;: [&quot;large&quot;, &quot;aside&quot;] , &quot;header&quot;: true  , &quot;footer&quot;:true  }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-two-right">Two
        column (right sidebar)</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-three&quot;, &quot;columns&quot;: [&quot;&quot;, &quot;&quot;, &quot;&quot;] , &quot;header&quot;: true  , &quot;footer&quot;:true  }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-three">Three
        column</span></a>
    -   <a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
        class="item-link"
        data-atlassian-layout="{&quot;name&quot;: &quot;pagelayout-three-sidebars&quot;, &quot;columns&quot;: [&quot;sidebars&quot;, &quot;large&quot;, &quot;sidebars&quot;] , &quot;header&quot;: true  , &quot;footer&quot;:true  }"><span
        class="icon aui-icon aui-icon-small aui-iconfont-check hidden"></span>
        <span
        class="icon aui-icon aui-icon-small aui-iconfont-layout pagelayout-three-sidebars">Three
        column (left and right sidebars)</span></a>

<!-- -->

-   <span id="rte-button-undo"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    class="toolbar-trigger" data-control-id="undo"><span
    class="icon aui-icon aui-icon-small aui-iconfont-undo">Undo</span></a></span>
-   <span id="rte-button-redo"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    class="toolbar-trigger" data-control-id="redo"><span
    class="icon aui-icon aui-icon-small aui-iconfont-redo">Redo</span></a></span>

-   <span id="rte-button-searchreplace"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
    class="toolbar-trigger" data-control-id="searchreplace"><span
    class="icon aui-icon aui-icon-small aui-iconfont-search">Find/Replace</span></a></span>

<!-- -->

-   <span id="rte-button-help"><a href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#"
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

## Attention

This document is currently being edited by another user. Still want to
switch to edit mode?

Yes

No

<span class="css-178ag6o"><img src="./Tryout_video_files/ite-macro-icon.png"
class="styles-moduleicon_CXALo" /></span>

<span id="fancybox-close"></span>

<a href="javascript:;" id="fancybox-left"><span id="fancybox-left-ico"
class="fancy-ico"></span></a><a href="javascript:;" id="fancybox-right"><span id="fancybox-right-ico"
class="fancy-ico"></span></a>

<span class="inline-editing-edit-cell-btn aui-icon aui-icon-small aui-iconfont-edit-small ctipe"
title="Edit cell"></span><span class="inline-editing-cell-dropdown-menu custom-dropdown aui-icon aui-icon-small aui-iconfont-arrow-down-small aui-dropdown2-trigger ctipe"
aria-controls="ite-action-dropdown-list-actions" resolved=""
aria-haspopup="true" aria-expanded="false"></span>
<span class="aui-dropdown2-heading" aria-hidden="true"></span>

<a
href="https://wiki.rdkcentral.com/display/DOC/Try+Out+RDK#inline-editing-color-cell-menu"
class="aui-dropdown2-sub-trigger aui-dropdown2-trigger" role="menuitem"
tabindex="-1" aria-controls="inline-editing-color-cell-menu"
data-resolved="" aria-haspopup="true" aria-expanded="false">Cell
color</a><span role="menuitem" tabindex="-1">Insert column
before</span><span role="menuitem" tabindex="-1">Insert column
after</span><span role="menuitem" tabindex="-1">Remove
column</span><span role="menuitem" tabindex="-1">Insert row
below</span><span role="menuitem" tabindex="-1">Remove
row</span><span role="menuitem" tabindex="-1">Merge this cell with the
next</span><span role="menuitem" tabindex="-1">Split
cell</span><span role="menuitem" tabindex="-1">Clear cell</span>

<span class="aui-dropdown2-heading" aria-hidden="true"></span>

<span role="menuitem"
tabindex="-1"><span class="aui-icon aui-icon-small aui-iconfont-single-column"></span></span><span role="menuitem"
tabindex="-1"><span class="aui-icon aui-icon-small aui-iconfont-single-column"></span></span><span role="menuitem"
tabindex="-1"><span class="aui-icon aui-icon-small aui-iconfont-single-column"></span></span><span role="menuitem"
tabindex="-1"><span class="aui-icon aui-icon-small aui-iconfont-single-column"></span></span><span role="menuitem"
tabindex="-1"><span class="aui-icon aui-icon-small aui-iconfont-single-column"></span></span><span role="menuitem"
tabindex="-1"><span class="aui-icon aui-icon-small aui-iconfont-single-column"></span></span>

## Confirm you want to delete the row

<span class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">Close</span></span>

Content for the modal dialog.

Delete the row

Cancel

## Confirm the column(s) deletion

<span class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">Close</span></span>

Content for the modal dialog.

Delete the column(s)

Cancel
