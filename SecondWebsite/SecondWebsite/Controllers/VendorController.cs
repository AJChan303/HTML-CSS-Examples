using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecondWebsite.Controllers {
    public class VendorController : Controller{
        public IActionResult GetName() {
            return this.View();    }
    }
}

