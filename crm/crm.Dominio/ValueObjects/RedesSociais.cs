using System;
using System.Collections.Generic;
using System.Text;

namespace crm.Dominio.ValueObjects
{
    public class RedesSociais
    {
        public RedesSociais(string twitter,string skype, string youtube, 
            string faceBook, string googlePlus, string linkedin, string instagram)
        {
            Twitter = twitter;
            Skype = skype;
            Youtube = youtube;
            FaceBook = faceBook;
            GooglePlus = googlePlus;
            Linkedin = linkedin;
            Instagram = instagram;
        }
        public string Twitter { get; set; }

        public string Skype { get; set; }
        public string Youtube { get; set; }
        public string FaceBook { get; set; }
        public string GooglePlus { get; set; }
        public string Linkedin { get; set; }
        public string Instagram { get; set; }

    }
}
