﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SecondWebsite.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            //return this.Content("Hello <b>world</b>!");
            return View();

        }
    }
}