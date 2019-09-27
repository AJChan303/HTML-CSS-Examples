using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace MyWebServer {
    class Program {
        static void Main(string[] args) {
            //creating a System.NetHttpListener to receive the service requests
            HttpListener listener = new HttpListener();
            string uri = "http://localhost:8080/";
            //.Add hint that this is a collection
            listener.Prefixes.Add(uri);
            listener.Start();

            //loop and wait for the next request
            while (true) {
                Console.WriteLine("\nListening on " + uri + " ... ");
                // wait for request
                HttpListenerContext context = listener.GetContext();
                Console.WriteLine("\nIncoming request received!");
                // this is what gets the request
                //Get the incoming request'
                HttpListenerRequest request = context.Request;

                string url = request.Url.ToString();
                Console.WriteLine("URL: " + url);
                Console.WriteLine("Method: " + request.HttpMethod);


                
            }


        }
    }
}
