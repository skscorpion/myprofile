using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.IO;

namespace MyProfile
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            //app.UseDefaultFiles();
            //app.UseStaticFiles();
            // .UseMvc(routes =>
            // {
            //     routes.MapRoute(
            //         name:"default",
            //         template: "{controller=Home}/{action=Index}");
            //        // routes.mapSpaFallbackRoute("spa-fallback", new {Controller = "Home", action = "Index"});
            // });
            // app.UseMvc(routes =>
            // {
            //     routes.MapRoute(
            //         name: "default",
            //         template: "{controller=Home}/{action=Index}/{id?}");

            //     // when the user types in a link handled by client side routing to the address bar 
            //     // or refreshes the page, that triggers the server routing. The server should pass 
            //     // that onto the client, so Angular can handle the route
            //     routes.MapRoute(
            //         name: "spa-fallback",
            //         template: "{*url}",
            //         defaults: new { controller = "Home", action = "Index" }
            //     );
            // });
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

          //  app.UseMvc();
          app.Use(async (context, next) =>
          {
              await next();
              if(context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
              {
                  context.Request.Path = "/index.html";
                  await next();
              }
          })
          .UseDefaultFiles(new DefaultFilesOptions
          { DefaultFileNames = new List<string> { "index.html"} })
          .UseStaticFiles()
          .UseMvc();
        
        }
    }
}
