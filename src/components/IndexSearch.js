function IndexSearch(){
    return (
        <div class="row g-2 align-items-center flex-wrap">


        <div class="col-12 col-lg-auto">
          <ul class="nav nav-tabs" id="propertyTabs">
            <li class="nav-item">
              <a class="nav-link active" href="#" data-tab="buy">Buy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-tab="rent">Rent</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-tab="commercial">Commercial</a>
            </li>
          </ul>
        </div>


        <div class="col-12 col-sm-6 col-lg-2">
          <select class="form-select" id="citySelect">
            <option selected>Chennai</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
            <option>Pune</option>
          </select>
        </div>


        <div class="col-12 col-sm-6 col-lg-6">
          <input type="text" class="form-control" id="searchBox" placeholder="Search upto 3 localities or landmarks" />
        </div>


        <div class="col-12 col-sm-12 col-lg-2">
          <button class="btn btn-danger w-100">🔍 Search</button>
        </div>
      </div>

    )
}

export default IndexSearch;