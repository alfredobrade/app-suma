using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

namespace back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CalculosController : ControllerBase
    {
        ICalculosService calculosService;
        Calculos calculos = new Calculos();
        public CalculosController(ICalculosService service)
        {

            calculosService = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            
            return Ok(calculos.Resultado);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Calculos calc)
        {

            calculos.Resultado = calculosService.Sumar(calc.Np,calc.Ns);
            return Ok(calculos);
        }


        
    }
}