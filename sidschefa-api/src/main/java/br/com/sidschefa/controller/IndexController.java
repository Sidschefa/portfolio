package br.com.sidschefa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {


    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ModelAndView getIndex(){
        ModelAndView mav = new ModelAndView("login");
        return mav;
    }
}
