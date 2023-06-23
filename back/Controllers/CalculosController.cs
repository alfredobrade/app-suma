using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors("hola")]
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
            
            return Ok("hola desde la app suma");
        }

        [HttpPost]
        public IActionResult Post([FromBody]Calculos calc)
        {

            calculos.Resultado = calculosService.Sumar(calc.Np,calc.Ns);
            return Ok(calculos.Resultado);
        }


        
    }
}