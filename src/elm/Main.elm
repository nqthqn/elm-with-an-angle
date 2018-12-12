module Main exposing (main)

import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)


type alias Model =
    { count : Int }


initialModel : String -> (Model, Cmd Msg)
initialModel flags =
    ({ count = 0 }, Cmd.none)


type Msg
    = Increment
    | Decrement


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        Increment ->
            ({ model | count = model.count + 1 }, Cmd.none)

        Decrement ->
            ({ model | count = model.count - 1 }, Cmd.none)


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick Increment ] [ text "+1" ]
        , div [] [ text <| String.fromInt model.count ]
        , button [ onClick Decrement ] [ text "-1" ]
        ]


main : Program String Model Msg
main =
    Browser.element
        { init = initialModel
        , subscriptions = always Sub.none
        , update = update
        , view = view        
        }
