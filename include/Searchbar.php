<?php include 'include/head.php';?>


<div class="searchheader">
    <div class="container-sec">

<form action="#" id="search-form-results">
  <div class="search" role="search">
    <div>
      <div>
        <button type="submit" id="sb_form_go" aria-label="Search">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
    <input
      id="search-results-input"
      type="search"
      name="q"
      value="Amazon"
      maxlength="2000"
      placeholder="Ask me anything..."
      aria-label="Enter your search here - Search suggestions will show as you type"
      aria-autocomplete="both"
      autocapitalize="off"
      autocomplete="off"
      spellcheck="false"
    />
    <input type="hidden" name="action" value="s" />
  </div>
</form>

<nav role="navigation" aria-label="Search Filter">
  <ul>
    <li  class="bold">
      <a aria-current="page" href="#"><i class="fas fa-search"></i>All</a>
    </li>
    <li>
      <a href="#" target="_self">Shopping</a>
    </li>
    <li>
      <a href="#" target="_self">Images</a>
    </li>
    <li>
      <a href="#" target="_self">Videos</a>
    </li>
  </ul>
</nav>
</div>
</div>










<?php include 'include/links.php';?>