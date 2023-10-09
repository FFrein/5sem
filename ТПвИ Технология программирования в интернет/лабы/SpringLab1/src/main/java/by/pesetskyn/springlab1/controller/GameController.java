package by.pesetskyn.springlab1.controller;
import by.pesetskyn.springlab1.forms.GameForm;
import by.pesetskyn.springlab1.model.Game;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@Controller
public class GameController {
    private static List<Game> games = new ArrayList<Game>();

    static {
        games.add(new Game("Counter Strike 2", "Valve Corp."));
        games.add(new Game("Dota 2", "Valve Corp."));
    }

    //
    // Вводится (inject) из application.properties.
    @Value("${welcome.message}")
    private String message;

    @Value("${error.message}")
    private String errorMessage;

    @RequestMapping(value = {"/", "/index"}, method = RequestMethod.GET)
    public ModelAndView index(Model model) {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index");
        model.addAttribute("message", message);
        return modelAndView;
    }
    @RequestMapping(value = {"/allgames"}, method = RequestMethod.GET)
    public ModelAndView gameList(Model model) {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("gamelist");
        model.addAttribute("games", games);
        return modelAndView;
    }
    @RequestMapping(value = {"/addgame"}, method = RequestMethod.GET)
    public  ModelAndView showAddPersonPage(Model model) {
        ModelAndView modelAndView = new ModelAndView("addgame");
        GameForm gameForm = new GameForm();
        model.addAttribute("gameform", gameForm);
        return modelAndView;
    }
    //  @PostMapping("/addbook")
//GetMapping("/")
    @RequestMapping(value = {"/addgame"}, method = RequestMethod.POST)
    public ModelAndView savePerson(Model model, //
                                   @ModelAttribute("gameform") GameForm bookForm) {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("gamelist");
        String title = bookForm.getTitle();
        String company = bookForm.getCompany();

        if (title != null && title.length() > 0 //
                && company != null && company.length() > 0) {
            Game newGame = new Game(title, company);
            games.add(newGame);
            model.addAttribute("games",games);
            return modelAndView;
        }
        model.addAttribute("errorMessage", errorMessage);
        modelAndView.setViewName("addgame");
        return modelAndView;
    }

}